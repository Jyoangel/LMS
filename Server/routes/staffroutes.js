const express = require('express');
const mongoose = require('mongoose');
const Staff = require('../Models/StaffDetails');
const checkRole = require('../middleware/checkRole');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');


// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

router.post('/import', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Read the uploaded Excel file
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert Excel data to JSON
        const staffData = xlsx.utils.sheet_to_json(worksheet);

        // Helper function to validate date
        const isValidDate = (dateString) => {
            const date = new Date(dateString);
            return !isNaN(date.getTime()); // Returns true if valid date
        };

        // Transform the data to match the StaffDetail schema
        const transformedData = staffData.map(data => ({
            staffID: data.staffID,
            name: data.name,
            dateOfBirth: isValidDate(data.dateOfBirth) ? new Date(data.dateOfBirth) : null,
            gender: data.gender,
            contactNumber: data.contactNumber,
            email: data.email,
            education: data.education,
            address: data.address,
            aadharNumber: data.aadharNumber,
            position: data.position,
            employmentType: data.employmentType,
            emergencyContact: {
                contactNumber: data.emergencyContact_contactNumber,
                relationship: data.emergencyContact_relationship
            },
            nationality: data.nationality,
            languageSpoken: data.languageSpoken,
            salary: data.salary
        }));

        // Filter out any invalid staff records (e.g., missing date of birth)
        const validStaff = transformedData.filter(staff => staff.dateOfBirth !== null);

        if (validStaff.length === 0) {
            return res.status(400).json({ error: 'No valid staff data to import' });
        }

        // Insert valid staff data into the database
        await Staff.insertMany(validStaff);

        // Return success response with the total number of staff members
        const count = await Staff.countDocuments();
        res.status(201).json({ message: `Staff data imported successfully. Total staff members: ${count}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



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
    try {
        const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!staff) {
            return res.status(404).json({ error: 'Staff not found' });
        }
        res.status(200).json(staff);
    } catch (error) {
        res.status(400).json({ error: error.message });
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
