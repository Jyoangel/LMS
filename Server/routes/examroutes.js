const express = require('express');
const router = express.Router();
const Exam = require('../Models/Exam');

const getExamCount = async () => {
    return await Exam.countDocuments();
};
// Add a new exam
router.post('/add', async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).send(exam);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all exams
router.get('/get', async (req, res) => {
    try {
        const exams = await Exam.find();
        const count = await getExamCount();
        res.status(200).send({ exams, count });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get exam by ID
router.get('/get/:id', async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }
        res.status(200).send(exam);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update exam by ID
router.put('/update/:id', async (req, res) => {
    try {
        const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }
        res.status(200).send(exam);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete exam by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const exam = await Exam.findByIdAndDelete(req.params.id);
        if (!exam) {
            return res.status(404).send({ error: 'Exam not found' });
        }
        res.status(200).send({ message: 'Exam deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
