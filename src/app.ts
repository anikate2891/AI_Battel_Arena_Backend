import express from 'express';
import cors from 'cors';
import runGraph from './services/grap.ai.service.js';
import authRoute from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import chatRoute from './routes/chat.route.js';
import {config} from "dotenv";
import { protect } from './middleware/auth.middleware.js';
config();
const app = express();
app.use(cookieParser());


const allowedOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173, http://localhost:5174')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/chats", chatRoute);

app.post('/api/chat', protect,   async (req, res) => {
    const problem = typeof req.body?.problem === 'string' ? req.body.problem.trim() : '';
    if (!problem) {
        return res.status(400).json({ message: 'Problem is required.' });
    }
    try {
        await runGraph(req, res);
    } catch (error) {
        console.error('Failed to process chat request:', error);
        res.end();
    }
});


export default app;