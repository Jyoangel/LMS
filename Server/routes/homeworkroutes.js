const express = require('express');
const router = express.Router();
const Homework = require('../Models/HomeWork'); // Ensure the correct path

const getHomeworkCount = async () => {
    return await Homework.countDocuments();
};

// Create Homework
router.post('/add', async (req, res) => {
    try {
        const homework = new Homework(req.body);
        await homework.save();
        const count = await getHomeworkCount();
        res.status(201).send({ homework, count });
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get all Homework
router.get('/get', async (req, res) => {
    try {
        const homeworks = await Homework.find();
        const count = await getHomeworkCount();
        res.json({ homeworks, count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Homework by ID
router.get('/get/:id', async (req, res) => {
    try {
        const homework = await Homework.findById(req.params.id);
        if (!homework) {
            return res.status(404).send();
        }
        res.send(homework);
    } catch (e) {
        res.status(500).send(e);
    }
});


router.put('/update/:id', async (req, res) => {
    try {
        const homework = await Homework.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!homework) {
            return res.status(404).send({ error: 'HomeWork not found' });
        }
        res.status(200).send(homework);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete Homework
router.delete('/delete/:id', async (req, res) => {
    try {
        const homework = await Homework.findByIdAndDelete(req.params.id);
        if (!homework) {
            return res.status(404).send();
        }
        const count = await getHomeworkCount();
        res.json({ homework, count });
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
