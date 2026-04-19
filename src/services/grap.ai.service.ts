import type { Request, Response } from "express";
import { mistralModel, cohereModel, groqClient } from "./models.service.js";
import chatModel from "../models/chatModel.js";

export default async function (req: Request, res: Response) {
    const { problem } = req.body;

    res.setHeader("Content-Type", "text/plain");

    let solution1 = "";
    let solution2 = "";

    const streamToRes = async (stream: any, label: string, store: (t: string) => void) => {
        for await (const chunk of stream) {
            const text = chunk.content ?? "";

            store(text); // 👈 store for judge

            res.write(JSON.stringify({
                model: label,
                content: text
            }) + "\n");
        }
    };

    const mistralStream = await mistralModel.stream(problem);
    const cohereStream = await cohereModel.stream(problem);

    await Promise.allSettled([
        streamToRes(mistralStream, "mistral", (t) => solution1 += t),
        streamToRes(cohereStream, "cohere", (t) => solution2 += t)
    ]);

let judgeData = null;

try {
    const judgeResponse = await groqClient.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [{
            role: "user",
            content: `
                You are a strict evaluator.
                Problem: ${problem}
                Solution 1 (Mistral): ${solution1}
                Solution 2 (Cohere): ${solution2}
                
                Score both solutions from 1-10 and give feedback.
                Return ONLY valid JSON with keys:
                solution_1_score, solution_2_score, solution_1_feedback, solution_2_feedback
            `
        }],
        response_format: { type: "json_object" }  // ✅ direct JSON milega
    });

    judgeData = JSON.parse(judgeResponse.choices[0]?.message.content ?? "{}");

    console.log("Judge Data:", judgeData);

    res.write(JSON.stringify({
        type: "judge",
        data: judgeData
    }) + "\n");

} catch (err) {
    console.log("JUDGE ERROR:", err);
    res.write(JSON.stringify({
        type: "judge",
        data: {
            solution_1_score: 0,
            solution_2_score: 0,
            solution_1_feedback: "Judge unavailable",
            solution_2_feedback: "Judge unavailable"
        }
    }) + "\n");
}
    const userId = (req as any).user.userId;

    await chatModel.create({
    userId,
    problem,
    solution_1: solution1,
    solution_2: solution2,
    judge: judgeData,
    });
    res.end();
}