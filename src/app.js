const express = require("express");
const cors = require("cors");
const courseRoutes = require("./routes/coursesRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/courses", courseRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the LMS API");
});

module.exports = app;
