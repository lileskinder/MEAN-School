const mongoose = require("mongoose");
const Student = mongoose.model("Student");

module.exports.getAllStudents = function (request, response) {
    Student.find().exec(function (err, Students) {
        response.status(200).json(Students);
    });
}

module.exports.getOneStudent = function (request, response) {
    const studentId = request.params.studentId;
    Student.findById(studentId).exec(function (err, Student) {
        response.status(200).json(Student);
    });
}