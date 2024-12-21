import { NextFunction , Request, Response  } from "express"
import { User } from "../models/user.js";
import {NewUserRequestBody} from '../types/types.js'


 export const newUser = async (
    req:Request <{},{},NewUserRequestBody>,
    res:Response,
    next:NextFunction) =>{

try {
    
    const {name,_id,photo,role,email,dob,gender} = req.body;
    
    const user = await User.create({
        name,
        _id,
        photo,
        role,
        email,
        dob,
        gender,
    });

    res.status(200).json({
        success:true,
        message:`Welcome, ${user.name}`,
    })
}
catch (error) {
    
}

}