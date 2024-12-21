import { NextFunction , Request, Response  } from "express"
import { User } from "../models/user.js";
import {NewUserRequestBody} from '../types/types.js'
import { error } from "console";


 export const newUser = async (
    req:Request <{},{},NewUserRequestBody>,
    res:Response,
    next:NextFunction) =>{

try {
    
    const {name,_id,photo,email,dob,gender} = req.body;
    
    const user = await User.create({
        name,
        _id,
        photo,
        email,
        dob,
        gender,
    });

    res.status(201).json({
        success:true,
        message:`Welcome, ${user.name}`,
    })
    
}
catch (error) {
    res.status(400).json({
        success:false,
        message:error,
    })
}

}