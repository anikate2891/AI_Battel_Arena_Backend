import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";
import { saveChat, getChats, deleteChat } from "../controllers/chat.controller.js";

const router = Router();

// 🔹 Save chat (AI response ke baad)
router.post("/", protect, saveChat);

// 🔹 Get last 10 chats
router.get("/", protect, getChats);

// 🔹 Delete chat by id
router.delete("/:chatId", protect, deleteChat);

export default router;