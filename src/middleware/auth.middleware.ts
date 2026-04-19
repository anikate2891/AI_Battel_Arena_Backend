import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export const protect = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
        return res.status(401).json({ message: "Not authorized" });
        }
        const decoded = jwt.verify( token, process.env.JWT_SECRET as string ) as { userId: string };

        // 👇 attach userId to request
        (req as any).user = { userId: decoded.userId };
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};