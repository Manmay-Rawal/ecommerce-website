export const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Optional: Log the error stack for debugging
    res.status(500).json({
        success: false,
        message: err.message || "An unexpected error occurred",
    });
};
