

const express = require('express');
const router = express.Router();
const LiveClass = require('../Models/LiveClass');
const checkRole = require('../middleware/checkRole');

// Create a new live class
router.post('/add', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const liveClass = new LiveClass(req.body);
        await liveClass.save();
        res.status(201).send(liveClass);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all live classes
router.get('/get', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const liveClasses = await LiveClass.find({});
        res.status(200).send(liveClasses);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a specific live class by ID
router.get('/get/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const liveClass = await LiveClass.findById(req.params.id);
        if (!liveClass) {
            return res.status(404).send();
        }
        res.status(200).send(liveClass);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a live class by ID
router.put('/update/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['topic', 'section', 'liveRoom', 'date', 'time', 'duration', 'noteToStudents'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const liveClass = await LiveClass.findById(req.params.id);
        if (!liveClass) {
            return res.status(404).send();
        }

        updates.forEach(update => liveClass[update] = req.body[update]);
        await liveClass.save();
        res.status(200).send(liveClass);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a live class by ID
router.delete('/delete/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const liveClass = await LiveClass.findByIdAndDelete(req.params.id);
        if (!liveClass) {
            return res.status(404).send();
        }
        res.status(200).send(liveClass);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
