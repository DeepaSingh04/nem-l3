const express = require("express");
const { getCourses, getCourse } = require("../controllers/coursesController");

const router = express.Router();

// Route: Get All Courses with Filtering
router.get("/", getCourses);

// Route: Get Single Course by ID
router.get("/:id", getCourse);

module.exports = router;
