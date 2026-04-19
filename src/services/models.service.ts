import {ChatMistralAI} from "@langchain/mistralai";
import {ChatCohere} from "@langchain/cohere";
import configs from "../config/config.js";
import Groq from "groq-sdk";

// Judge model
export const groqClient = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: configs.MISTRAL_API_KEY,
    streaming: true,
});

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: configs.COHERE_API_KEY,
    streaming: true,
}); 