const express = require('express');
const router = express.Router();
const Attendance = require('../Models/Attendance');
const StudentDetail = require('../Models/StudentDetails');

// Route to add a new attendance record
router.post('/add', async (req, res) => {
    try {
        const student = await StudentDetail.findOne({ studentID: req.body.studentID });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const attendance = new Attendance({
            studentId: student._id,  // Reference to StudentDetail
            present: req.body.present
        });

        const savedAttendance = await attendance.save();
        res.status(201).json(savedAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all attendance records with populated student details
router.get('/get', async (req, res) => {
    try {
        const attendance = await Attendance.findWithStudentDetails();
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { present } = req.body; // 'present' should be a boolean value

        // Find and update the attendance record
        const attendance = await Attendance.findById(id);

        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }

        attendance.present = present; // Update the present field
        const updatedAttendance = await attendance.save();

        res.json(updatedAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/studentpresent', async (req, res) => {
    try {
        const presentCount = await Attendance.countDocuments({ present: true });
        res.json({ presentCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
