import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, _id, photo, role, email, dob, gender } = req.body;
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
            success: true,
            message: `Welcome, ${user.name}`,
        });
    }
    catch (error) {
    }
};
