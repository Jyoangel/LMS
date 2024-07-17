const express = require('express');
const router = express.Router();
const Transportation = require('../Models/Transpotation');

const getTransportationCount = async () => {
    return await Transportation.countDocuments();
};
// Add a new transportation record
router.post('/add', async (req, res) => {
    try {
        const newRecord = new Transportation(req.body);
        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all transportation records
router.get('/get', async (req, res) => {
    try {
        const records = await Transportation.find();
        const count = await getTransportationCount();
        res.status(200).json({ records, count });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get a transportation record by ID
router.get('/get/:id', async (req, res) => {
    try {
        const record = await Transportation.findById(req.params.id);
        if (!record) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a transportation record by ID
router.put('/update/:id', async (req, res) => {
    try {
        const record = await Transportation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!record) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a transportation record by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const record = await Transportation.findByIdAndDelete(req.params.id);
        if (!record) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json({ message: 'Record deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;
