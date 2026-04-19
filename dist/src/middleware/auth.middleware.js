import jwt from "jsonwebtoken";
export const protect = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "Not authorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 👇 attach userId to request
        req.user = { userId: decoded.userId };
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};
//# sourceMappingURL=auth.middleware.js.map