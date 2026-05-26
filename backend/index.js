const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route 
app.get("/", (req, res) => {
    res.send("Shopnest backend working");
});

// Port
const PORT = process.env.PORT || 5000;

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});