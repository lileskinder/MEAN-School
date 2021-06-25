const mongoose = require("mongoose");
require("./school-model");

const _dbName = "SchoolDB";
const _dbUrl = "mongodb://localhost:27017/"+_dbName;

mongoose.connect(_dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Send disconncet to mongoose because of application termination");
        process.exit(0);
    })
})

process.on("SIGTERM", function() {
    mongoose.connection.close(function() {
        console.log("Send disconncet to mongoose because of application termination");
        process.exit(0);
    })
})

process.on("SIGUSR2", function() {
    mongoose.connection.close(function() {
        console.log("Send disconncet to mongoose because of application restart");
        process.kill(process.pid, "SIGUSR2");
    })
})