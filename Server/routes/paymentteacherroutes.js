const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PaymentTeacher = require('../Models/Paymentteacher');
const TeacherDetails = require('../Models/TeacherDetails');



// Create a payment record for a teacher
router.post('/create', async (req, res) => {
    try {
        const { teacherId, assignedClass, salary, paidAmount } = req.body;

        // Calculate due amount and determine status
        const teacher = await TeacherDetails.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const dueAmount = salary - paidAmount;
        const status = dueAmount > 0 ? 'Due' : 'Paid';

        const newPayment = new PaymentTeacher({
            teacher: teacherId,
            assignedClass,
            salary,
            status,
            paidAmount,
            dueAmount,

        });

        const payment = await newPayment.save();
        res.status(201).json({ message: 'Payment record created successfully', payment });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/get', async (req, res) => {
    try {
        const payments = await PaymentTeacher.find().populate('teacher', 'teacherID name aadharNumber subjectTaught highestDegreeEarned contactNumber parent.fatherName');
        const totalPayments = payments.length;
        const totalAmountPaid = payments.reduce((acc, payment) => acc + payment.paidAmount, 0);



        res.json({
            totalPayments,
            totalAmountPaid,

            payments
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});






// Get payment record by ID
router.get('/show/:id', async (req, res) => {
    try {
        const payment = await PaymentTeacher.findById(req.params.id).populate('teacher', 'teacherID name aadharNumber subjectTaught highestDegreeEarned contactNumber parent.fatherName');
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }
        res.json(payment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update payment record
router.put('/update/:id', async (req, res) => {
    try {
        const { salary, paidAmount } = req.body;

        const payment = await PaymentTeacher.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }

        payment.salary = salary;
        payment.paidAmount = paidAmount;
        payment.dueAmount = salary - paidAmount;
        payment.status = payment.dueAmount > 0 ? 'Due' : 'Paid';

        await payment.save();
        res.status(200).json({ message: 'Payment record updated successfully', payment });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
// Delete payment record
router.delete('/delete/:id', async (req, res) => {
    try {
        const payment = await PaymentTeacher.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }

        await payment.remove();
        res.json({ message: 'Payment record deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;


{/*router.get('/teacher-payments', auth, checkRole(['admin']), async (req, res) => {
    try {
        const payments = await PaymentTeacher.find().populate('teacher', 'name aadharNumber subject contactNumber parent.fatherName');
        res.json(payments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
*/}

// Extract unique teachers from payments
//const teachers = payments.map(payment => payment.teacher);
//const uniqueTeachers = Array.from(new Set(teachers.map(teacher => teacher._id)))
// .map(id => teachers.find(teacher => teacher._id.toString() === id.toString()));
