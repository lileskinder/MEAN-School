const mongoose = require("mongoose");

const _courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true
    },

    description: String,
    Professor: String,
});

const _schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    Grade: {
        type: Number,
        require: true
    },

    Courses: [_courseSchema]
});

mongoose.model("Student", _schoolSchema, "Students");