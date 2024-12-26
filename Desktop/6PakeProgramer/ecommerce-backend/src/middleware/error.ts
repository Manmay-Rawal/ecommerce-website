import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/utlity-class.js";
import { controllerType } from "../types/types.js";
import { Promise } from "mongoose";

export const errorMiddleware = (

    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    // ) => {
    err.message ||= "Internal server error"
    err.statusCode ||= 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};


export const TryCatch = (func: controllerType) => 
    (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(func(req, res, next)).catch(next);
    };
