const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const StudentDetail = require('../Models/StudentDetails');
const Teacher = require('../Models/TeacherDetails');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Import students from an Excel file
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
        const studentsData = xlsx.utils.sheet_to_json(worksheet);

        // Transform the data to match the StudentDetail schema
        const transformedData = studentsData.map(studentData => ({
            studentID: studentData.studentID,
            formNumber: studentData.formNumber,
            admissionNumber: studentData.admissionNumber,
            class: studentData.class,
            admissionType: studentData.admissionType,
            name: studentData.name,
            nationality: studentData.nationality,
            motherTongue: studentData.motherTongue,
            dateOfBirth: new Date(studentData.dateOfBirth),
            gender: studentData.gender,
            religion: studentData.religion,
            caste: studentData.caste,
            bloodGroup: studentData.bloodGroup,
            aadharNumber: studentData.aadharNumber,
            contactNumber: studentData.contactNumber,
            email: studentData.email,
            address: studentData.address,
            parent: {
                fatherName: studentData.parent_fatherName,
                fatherContactNumber: studentData.parent_fatherContactNumber,
                fatherAadharNumber: studentData.parent_fatherAadharNumber,
                fatherOccupation: studentData.parent_fatherOccupation,
                motherName: studentData.parent_motherName,
                motherContactNumber: studentData.parent_motherContactNumber,
                motherAadharNumber: studentData.parent_motherAadharNumber,
                motherOccupation: studentData.parent_motherOccupation,
                annualIncome: studentData.parent_annualIncome,
                parentAddress: studentData.parent_parentAddress
            },
            localGuardian: {
                guardianName: studentData.localGuardian_guardianName,
                relationWithStudent: studentData.localGuardian_relationWithStudent,
                guardianContactNumber: studentData.localGuardian_guardianContactNumber,
                guardianAadharNumber: studentData.localGuardian_guardianAadharNumber,
                guardianOccupation: studentData.localGuardian_guardianOccupation,
                guardianAddress: studentData.localGuardian_guardianAddress
            }
        }));

        await StudentDetail.insertMany(transformedData);

        const count = await StudentDetail.countDocuments();
        res.status(201).json({ message: `Students imported successfully. Total students: ${count}` });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Create a new student
router.post('/add', async (req, res) => {
    try {
        const student = new StudentDetail(req.body);
        await student.save();
        const count = await StudentDetail.countDocuments();
        res.status(201).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all students
router.get('/get', async (req, res) => {
    try {
        const students = await StudentDetail.find();
        const count = await StudentDetail.countDocuments();
        res.status(200).json({ students, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a student by ID
{/*router.get('/get/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    const _id = req.params.id;

    try {
        const student = await StudentDetail.findById(_id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});*/}

// Update a student by ID
{/*router.put('/update/:id', auth, checkRole(['admin', 'teacher']), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'studentID', 'formNumber', 'admissionNumber', 'class', 'admissionType', 'name', 'nationality', 'motherTongue',
        'dateOfBirth', 'gender', 'religion', 'caste', 'bloodGroup', 'aadharNumber', 'contactNumber', 'email', 'address',
        'parent', 'localGuardian'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const student = await StudentDetail.findById(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        updates.forEach((update) => {
            student[update] = req.body[update];
        });

        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json(error);
    }
});*/}

router.get('/get/:studentID', async (req, res) => {
    try {
        const student = await StudentDetail.findOne({ studentID: req.params.studentID });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/update/:studentID', async (req, res) => {
    try {
        const student = await StudentDetail.findOne({ studentID: req.params.studentID });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

{/*

router.put('/update/:studentID', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'studentID', 'formNumber', 'admissionNumber', 'class', 'admissionType', 'name', 'nationality', 'motherTongue',
        'dateOfBirth', 'gender', 'religion', 'caste', 'bloodGroup', 'aadharNumber', 'contactNumber', 'email', 'address',
        'parent', 'localGuardian'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const student = await StudentDetail.findOne({ studentID: req.params.studentID });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        updates.forEach((update) => {
            student[update] = req.body[update];
        });

        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
*/}
// Delete a student by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const student = await StudentDetail.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        const count = await StudentDetail.countDocuments();
        res.status(200).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});
{/*
router.delete('/delete/:studentID', async (req, res) => {
    try {
        const student = await StudentDetail.findOneAndDelete({ studentID: req.params.studentID });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        const count = await StudentDetail.countDocuments();
        res.status(200).json({ message: 'Student deleted successfully', count });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
*/}
// Get the total number of students
router.get('/count', async (req, res) => {
    try {
        const count = await StudentDetail.countDocuments();
        const presentCount = await StudentDetail.countDocuments({ isPresent: true });

        res.status(200).json({ count, presentCount });
    } catch (error) {
        res.status(500).json(error);
    }
});





module.exports = router;


{/*const express = require('express');
const mongoose = require('mongoose');
const StudentDetail = require('../Models/StudentDetails');
const checkRole = require('../middleware/checkRole');

const router = express.Router();

// Create a new student
router.post('/add', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const student = new StudentDetail(req.body);
        await student.save();
        const count = await StudentDetail.countDocuments();
        res.status(201).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all students
router.get('/get', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const students = await StudentDetail.find();
        const count = await StudentDetail.countDocuments();
        res.status(200).json({ students, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a student by ID
router.get('/get/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    const _id = req.params.id;

    try {
        const student = await StudentDetail.findById(_id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a student by ID
router.put('/update/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'studentID', 'formNumber', 'admissionNumber', 'class', 'admissionType', 'name', 'nationality', 'motherTongue',
        'dateOfBirth', 'gender', 'religion', 'caste', 'bloodGroup', 'aadharNumber', 'contactNumber', 'address',
        'parent', 'localGuardian'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const student = await StudentDetail.findById(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        updates.forEach((update) => {
            student[update] = req.body[update];
        });

        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete a student by ID
router.delete('/delete/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const student = await StudentDetail.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        const count = await StudentDetail.countDocuments();
        res.status(200).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get the total number of students
router.get('/count', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const count = await StudentDetail.countDocuments();
        res.status(200).json({ message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


{/*const express = require('express');
const mongoose = require('mongoose');
const StudentDetail = require('../Models/StudentDetails');

const router = express.Router();

// Create a new student
router.post('/add', async (req, res) => {
    try {
        const student = new StudentDetail(req.body);
        await student.save();
        const count = await StudentDetail.countDocuments();
        res.status(201).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all students
router.get('/get', async (req, res) => {
    try {
        const students = await StudentDetail.find();
        const count = await StudentDetail.countDocuments();
        res.status(200).json({ students, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a student by ID
router.get('/get/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const student = await StudentDetail.findById(_id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a student by ID
router.put('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'studentID', 'formNumber', 'admissionNumber', 'class', 'admissionType', 'name', 'nationality', 'motherTongue',
        'dateOfBirth', 'gender', 'religion', 'caste', 'bloodGroup', 'aadharNumber', 'contactNumber', 'address',
        'parent', 'localGuardian'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const student = await StudentDetail.findById(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        updates.forEach((update) => {
            student[update] = req.body[update];
        });

        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete a student by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const student = await StudentDetail.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        const count = await StudentDetail.countDocuments();
        res.status(200).json({ student, message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get the total number of students
router.get('/count', async (req, res) => {
    try {
        const count = await StudentDetail.countDocuments();
        res.status(200).json({ message: `The total number of students is: ${count}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;


const express = require('express');
const mongoose = require('mongoose');
const StudentDetail = require('../Models/StudentDetails');

const router = express.Router();

// Create a new student
router.post('/add', async (req, res) => {
    try {
        const student = new StudentDetail(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Get all students
router.get('/get', async (req, res) => {
    try {
        const students = await StudentDetail.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get a student by ID
router.get('/get/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const student = await StudentDetail.findById(_id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a student by ID
router.put('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        'studentID', 'formNumber', 'admissionNumber', 'class', 'admissionType', 'name', 'nationality', 'motherTongue',
        'dateOfBirth', 'gender', 'religion', 'caste', 'bloodGroup', 'aadharNumber', 'contactNumber', 'address',
        'parent', 'localGuardian'
    ];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const student = await StudentDetail.findById(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        updates.forEach((update) => {
            student[update] = req.body[update];
        });

        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete a student by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const student = await StudentDetail.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json('Student not found');
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
*/}


{/*const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const studentDetails = require('../Models/StudentDetails');

router.post('/add', async (req, res) => {
    try {
        const newUser = new studentDetails(req.body);
        const saveUser = await newUser.save();
        res.status(201).json({
            message: "Student created successfully",
            data: saveUser
        });
    } catch (error) {
        console.error('Error saving user:', error); // Log the error
        res.status(400).json({ message: error.message });
    }
});






router.get('/get', async (req, res) => {

    const user = await studentDetails.find();

    res.status(200).json({
        message: "Student details",
        data: user
    });

});

module.exports = router;*/}
