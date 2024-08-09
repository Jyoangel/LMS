const express = require('express');
const mongoose = require('mongoose');
const Teacher = require('../Models/TeacherDetails');
const checkRole = require('../middleware/checkRole');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new teacher
router.post('/add', async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        const count = await Teacher.countDocuments();
        res.status(200).json({ teacher, message: `The total number of teachers is: ${count}` });
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all teachers
router.get('/get', async (req, res) => {
    try {
        const teachers = await Teacher.find();
        const count = await Teacher.countDocuments();
        res.status(200).json({ teachers, message: `The total number of teachers is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a teacher by ID
router.get('/get/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const teacher = await Teacher.findById(_id);

        if (!teacher) {
            return res.status(404).json('Teacher not found');
        }

        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a teacher by ID
{/*
router.put('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'teacherID', 'name', 'dateOfBirth', 'gender', 'contactNumber', 'email', 'aadharNumber', 'address',
        'subjectTaught', 'gradeLevelTaught', 'department', 'highestDegreeEarned', 'instituteName',
        'yearOfGraduation', 'emergencyContact', 'parent'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json('Teacher not found');
        }

        updates.forEach((update) => {
            teacher[update] = req.body[update];
        });

        await teacher.save();
        res.status(200).json(teacher);
    } catch (error) {
        console.log(msg.error)
        res.status(400).json(error);
    }
});
*/}
router.put('/update/:id', async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!teacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a teacher by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);

        if (!teacher) {
            return res.status(404).json('Teacher not found');
        }

        const count = await Teacher.countDocuments();
        res.status(200).json({ teacher, message: `The total number of Teachers is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/count', async (req, res) => {
    try {
        const count = await Teacher.countDocuments();
        const presentCount = await Teacher.countDocuments({ isPresent: true });
        res.status(200).json({ count, presentCount });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


{/*const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const teacherDetails = require('../Models/TeacherDetails');

router.post('/add', async (req, res) => {
    try {
        const newUser = new teacherDetails(req.body);
        const saveUser = await newUser.save();
        res.status(201).json({
            message: "Teacher created successfully",
            data: saveUser
        });
    } catch (error) {
        console.error('Error saving user:', error); // Log the error
        res.status(400).json({ message: error.message });
    }
});






router.get('/get', async (req, res) => {

    const user = await teacherDetails.find();

    res.status(200).json({
        message: "Teacher details",
        data: user
    });

});

module.exports = router;*/}