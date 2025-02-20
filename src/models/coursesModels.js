const courses = require("../data/courses.json");

// Get All Courses (Optional Filtering)
const getAllCourses = (available) => {
    if (available !== undefined) {
        const isAvailable = available === "true";
        return courses.filter(course => course.available === isAvailable);
    }
    return courses;
};

// Get Course by ID
const getCourseById = (id) => {
    return courses.find(course => course.id === Number(id));
};

module.exports = { getAllCourses, getCourseById };
