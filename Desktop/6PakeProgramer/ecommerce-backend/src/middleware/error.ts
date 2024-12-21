import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(err.stack); // Optional: Log the error stack for debugging

    res.status(500).json({
        success: false,
        message: err.message || "An unexpected error occurred",
    });
};
