import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middleware/error.js";
const app = express();
// Middleware to parse JSON
app.use(express.json());
// Connect to the database
connectDB();
// Define routes
app.get("/", (req, res) => {
    res.send("API is working with /api/v1");
});
app.use("/api/v1/user", userRoute);
// Error-handling middleware (must come after all routes)
app.use(errorMiddleware);
// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
