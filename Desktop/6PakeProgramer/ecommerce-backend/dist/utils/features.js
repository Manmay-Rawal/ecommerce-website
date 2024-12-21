import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommers_Manmay",
    })
        .then((c) => {
        console.log(`DB connected to ${c.connection.host}`);
    })
        .catch((err) => {
        console.log(err);
    });
};
