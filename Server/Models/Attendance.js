const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudentDetail',
        required: true
    },
    present: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Define a static method to fetch attendance with populated student details
attendanceSchema.statics.findWithStudentDetails = async function () {
    return this.find().populate('studentID').exec();
};

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
