import express from 'express';
import userRoute from './routes/user.js';
const app = express();
app.get("/", (req, res) => {
    res.send("API is working with /api/v1");
}),
    app.get("/user", (req, res) => {
        res.send("API is working with /api/v1");
    }),
    app.use("/api/v1/user", userRoute);
//listain
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`express is start on http://localhost:${PORT}`);
});
