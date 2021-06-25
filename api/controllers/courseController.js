const mongoose = require("mongoose");
const Student = mongoose.model("Student");


module.exports.getAllCourses = function (request, response) {
    const studentId = request.params.studentId;
    console.log("GET courses of ", studentId);
    Student.findById(studentId).select("Courses").exec(function (err, courses) {
        response.status(200).json(courses);
    });
}

module.exports.getOneCourse = function (request, response) {
    const studentId = request.params.studentId;
    const courseId = request.params.courseId;
    console.log("GET course of ", studentId);
    Student.findById(studentId).select("Courses").exec(function (err, students) {
        const course = students.Courses.id(courseId)
        response.status(200).json(course);
    });
}