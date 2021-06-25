const express = require("express");
const schoolController = require("../controllers/schoolController");
const courseController = require("../controllers/courseController")

const router = express.Router();

router.route("/students")
    .get(schoolController.getAllStudents);

router.route("/students/:studentId")
    .get(schoolController.getOneStudent);

router.route("/students/:studentId/courses")
    .get(courseController.getAllCourses);

    router.route("/students/:studentId/courses/:courseId")
    .get(courseController.getOneCourse); 

module.exports = router;