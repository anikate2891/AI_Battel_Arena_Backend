import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        problem: {
            type: String,
            required: true,
        },
            solution_1: String,
            solution_2: String,
        judge: {
            solution_1_score: Number,
            solution_2_score: Number,
            solution_1_feedback: String,
            solution_2_feedback: String,
        },
    },
    { timestamps: true }
);

const chatModel = mongoose.model("Chat", chatSchema);
export default chatModel;