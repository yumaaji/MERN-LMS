require ("dotenv").config();

const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
})

app.use(express.json())

// Database connection
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

    app.use((err, req, res, next) => {
        console.log(err.stack)
        res.status(500).json({
            success: false,
            message: `Something went wrong: ${err.message}`,
        })
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })