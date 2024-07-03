const express = require('express');
const router = express.Router();
const Assignment = require('../Models/Assignment');

// Utility function to get assignment count
const getAssignmentCount = async () => {
    return await Assignment.countDocuments();
};

// Create a new assignment
router.post('/add', async (req, res) => {
    try {
        const {
            assignmentCode,
            assignmentTitle,
            dueDate,
            attachments,
            submissionMethod,
            marks,
            additionalInstruction,
            class: class_,
            assignTo,
            courseDescription,
            createdBy
        } = req.body;

        const newAssignment = new Assignment({
            assignmentCode,
            assignmentTitle,
            dueDate,
            attachments,
            submissionMethod,
            marks,
            additionalInstruction,
            class: class_,
            assignTo,
            courseDescription,
            createdBy,
        });

        await newAssignment.save();
        const count = await getAssignmentCount();
        res.status(201).json({ assignment: newAssignment, count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all assignments
router.get('/get', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        const count = await getAssignmentCount();
        res.json({ assignments, count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get an assignment by ID
router.get('/get/:id', async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
        res.json(assignment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an assignment by ID
router.put('/update/:id', async (req, res) => {
    try {
        const {
            assignmentCode,
            assignmentTitle,
            dueDate,
            attachments,
            submissionMethod,
            marks,
            additionalInstruction,
            class: class_,
            assignTo,
            courseDescription,
            createdBy
        } = req.body;

        const updatedAssignment = await Assignment.findByIdAndUpdate(
            req.params.id,
            {
                assignmentCode,
                assignmentTitle,
                dueDate,
                attachments,
                submissionMethod,
                marks,
                additionalInstruction,
                class: class_,
                assignTo,
                courseDescription,
                createdBy
            },
            { new: true }
        );

        if (!updatedAssignment) return res.status(404).json({ message: 'Assignment not found' });

        res.json(updatedAssignment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete an assignment by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
        if (!deletedAssignment) return res.status(404).json({ message: 'Assignment not found' });

        const count = await getAssignmentCount();
        res.json({ message: 'Assignment deleted successfully', count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
