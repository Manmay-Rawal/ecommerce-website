import { NextFunction, Request, Response } from "express";


export interface NewUserRequestBody{
    name:string;
    _id:string;
    email:string;
    gender:string;
    role:string;
    photo:string;
    dob:Date;
}

export type controllerType = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;