import mongoose from 'mongoose';
import validator from 'validator';
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter ID"],
    },
    name: {
        type: String,
        required: [true, "Please enter name"],
    },
    email: {
        type: String,
        unique: [true, "Email is allready exist"],
        required: [true, "Please enter your email"],
        validate: validator.default.isEmail,
    },
    photo: {
        type: String,
        required: [true, "Please add photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please enter your gender"]
    },
    dob: {
        type: Date,
        required: [true, "please enter your Date of Birth"]
    },
}, {
    timestamps: true,
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth()
        && today.getDate() < dob.getDate())) {
        age--;
    }
    ;
    return age;
});
export const User = mongoose.model("User", schema);
