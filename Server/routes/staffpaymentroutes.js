const express = require('express');
const router = express.Router();
const StaffPayment = require('../Models/StaffPayment');
const StaffDetail = require('../Models/StaffDetails');

// Create a payment record
router.post('/create', async (req, res) => {
    try {
        const { staffId, salary, paidAmount, action } = req.body;

        const staff = await StaffDetail.findById(staffId);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }

        const dueAmount = salary - paidAmount;
        const status = dueAmount > 0 ? 'Due' : 'Paid';

        const newPayment = new StaffPayment({
            staff: staffId,
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

// Get all payment records
router.get('/get', async (req, res) => {
    try {
        const payments = await StaffPayment.find().populate('staff', 'name aadharNumber education position employmentType contactNumber');
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
        const payment = await StaffPayment.findById(req.params.id).populate('staff', 'name aadharNumber education position employmentType contactNumber');
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

        const payment = await StaffPayment.findById(req.params.id);
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



module.exports = router;
