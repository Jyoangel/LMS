const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const StudentDetail = require('../Models/StudentDetails');
const Teacher = require('../Models/TeacherDetails');
const Staff = require('../Models/StaffDetails');
const Attendance = require('../Models/Attendance')

router.get('/count', async (req, res) => {
    try {
        const count = await StudentDetail.countDocuments();
        const presentCount = await Attendance.countDocuments({ present: true });
        const teacher = await Teacher.countDocuments();
        const teacherpresent = await Teacher.countDocuments({ isPresent: true });
        const staffCount = await Staff.countDocuments();
        const staffpresentCount = await Staff.countDocuments({ isPresent: true });
        res.status(200).json({ count, presentCount, teacher, teacherpresent, staffCount, staffpresentCount });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;