// reportCardRoutes.js

const express = require('express');
const router = express.Router();
const ReportCard = require('../Models/Reportcard');



// Route to create a new ReportCard
router.post('/add', async (req, res) => {
    try {
        const reportCard = new ReportCard(req.body);
        await reportCard.save();
        res.status(201).send(reportCard);
        console.log(reportCard)
    } catch (err) {
        res.status(400).send(err);
    }
});

// Route to get all ReportCards
router.get('/get', async (req, res) => {
    try {
        const reportCards = await ReportCard.find();

        res.send(reportCards);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route to get a specific ReportCard by ID
router.get('/get/:id', async (req, res) => {
    try {
        const reportCard = await ReportCard.findById(req.params.id);
        if (!reportCard) {
            return res.status(404).send({ error: 'ReportCard not found' });
        }
        res.send(reportCard);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route to update a ReportCard by ID
router.put('/update/:id', async (req, res) => {
    try {
        const reportCard = await ReportCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reportCard) {
            return res.status(404).json({ error: 'Report card not found' });
        }
        res.status(200).json(reportCard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to delete a ReportCard by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const reportCard = await ReportCard.findByIdAndDelete(req.params.id);
        if (!reportCard) {
            return res.status(404).send({ error: 'ReportCard not found' });
        }
        res.send(reportCard);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
