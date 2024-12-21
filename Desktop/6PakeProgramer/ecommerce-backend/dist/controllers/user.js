import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, _id, photo, email, dob, gender } = req.body;
        const user = await User.create({
            name,
            _id,
            photo,
            email,
            dob,
            gender,
        });
        res.status(201).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};
