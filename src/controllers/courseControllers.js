const { getAllCourses, getCourseById } = require("../models/coursesModel");

// Get All Courses with Optional Filtering
const getCourses = (req, res) => {
    const { available } = req.query;
    const courses = getAllCourses(available);
    res.json(courses);
};

// Get Course by ID with Error Handling
const getCourse = (req, res) => {
    const course = getCourseById(req.params.id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
};

module.exports = { getCourses, getCourse };
