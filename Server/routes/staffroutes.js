const express = require('express');
const mongoose = require('mongoose');
const Staff = require('../Models/StaffDetails');
const checkRole = require('../middleware/checkRole');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new staff member
router.post('/add', async (req, res) => {
    try {
        const staff = new Staff(req.body);
        await staff.save();
        const count = await Staff.countDocuments();
        res.status(200).json({ staff, message: `The total number of Staffs is: ${count}` });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all staff members
router.get('/get', async (req, res) => {
    try {
        const staff = await Staff.find();
        const count = await Staff.countDocuments();
        res.status(200).json({ staff, message: `The total number of Staffs is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a staff member by ID
router.get('/get/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const staff = await Staff.findById(_id);

        if (!staff) {
            return res.status(404).json('Staff member not found');
        }

        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a staff member by ID
router.put('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'staffID', 'name', 'dateOfBirth', 'gender', 'contactNumber', 'email', 'education',
        'address', 'aadharNumber', 'position', 'employmentType', 'emergencyContact',
        'nationality', 'languageSpoken'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const staff = await Staff.findById(req.params.id);

        if (!staff) {
            return res.status(404).json('Staff member not found');
        }

        updates.forEach((update) => {
            staff[update] = req.body[update];
        });

        await staff.save();
        res.status(200).json(staff);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete a staff member by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);

        if (!staff) {
            return res.status(404).json('Staff member not found');
        }

        const count = await Staff.countDocuments();
        res.status(200).json({ staff, message: `The total number of Staffs is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/staff-count', async (req, res) => {
    try {
        const count = await Staff.countDocuments();
        const presentCount = await Staff.countDocuments({ isPresent: true });
        res.status(200).json({ count, presentCount });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
