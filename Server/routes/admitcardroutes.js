const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const xlsx = require('xlsx');
const AdmitCard = require('../Models/AdmitCaard');
const checkRole = require('../middleware/checkRole');

const router = express.Router();

const getAssignmentCount = async () => {
    return await AdmitCard.countDocuments();
};

const upload = multer({ dest: 'uploads/' });

router.post('/import', upload.single('file'), async (req, res) => {
    const filePath = path.join(__dirname, req.file.path);
    const admitCards = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => {
            const examSubjects = JSON.parse(row.exam_subjects);
            admitCards.push({
                examination_roll_number: row.examination_roll_number,
                school_name: row.school_name,
                session: row.session,
                examination: row.examination,
                student_name: row.student_name,
                class_name: row.class_name,
                start_date: new Date(row.start_date),
                end_date: new Date(row.end_date),
                exam_starting_time: row.exam_starting_time,
                exam_subjects: examSubjects
            });
        })
        .on('end', async () => {
            try {
                await AdmitCard.insertMany(admitCards);
                res.status(201).json({ message: 'Admit Cards imported successfully' });
            } catch (err) {
                res.status(400).json({ message: err.message });
            } finally {
                fs.unlinkSync(filePath); // Clean up the uploaded file
            }
        });
});

// Create a new Admit Card
router.post('/add', async (req, res) => {
    try {
        const newAdmitCard = new AdmitCard(req.body);
        const savedAdmitCard = await newAdmitCard.save();
        const count = await getAssignmentCount();
        res.status(201).json({ savedAdmitCard, count });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all Admit Cards
router.get('/get', async (req, res) => {
    try {
        console.log('Fetching admit card data...');

        const admitCards = await AdmitCard.find();

        console.log('Admit card data fetched successfully:', admitCards);

        res.status(200).json(admitCards);
    } catch (error) {
        console.error('Error fetching admit card data:', error);
        res.status(500).json({ message: 'Failed to fetch admit card data' });
    }
});

// Get a single Admit Card by ID
router.get('/get/:id', async (req, res) => {
    try {
        const admitCard = await AdmitCard.findById(req.params.id);
        if (!admitCard) return res.status(404).json({ message: 'Admit Card not found' });
        res.status(200).json(admitCard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an Admit Card by ID
router.put('/update/:id', async (req, res) => {
    try {
        const updatedAdmitCard = await AdmitCard.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedAdmitCard) return res.status(404).json({ message: 'Admit Card not found' });
        res.status(200).json(updatedAdmitCard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an Admit Card by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedAdmitCard = await AdmitCard.findByIdAndDelete(req.params.id);
        if (!deletedAdmitCard) return res.status(404).json({ message: 'Admit Card not found' });
        const count = await getAssignmentCount();
        res.status(200).json({ message: 'Admit Card deleted successfully', count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
