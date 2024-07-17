const express = require('express');
const router = express.Router();
const Fee = require('../Models/Fee');
const Student = require('../Models/StudentDetails');
const FeeNotice = require('../Models/FeeNotice');
const nodemailer = require('nodemailer');
const checkRole = require('../middleware/checkRole');

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service provider
    auth: {
        user: 'jyo209gup201@gmail.com',

        pass: 'endr hamj dblu rhiu'   // Your email password
    }
});

// Helper function to send email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'jyo209gup201@gmail.com', // Your email address
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
};

// Create a fee record
router.post('/add', async (req, res) => {
    try {
        const {
            studentID, totalFee, monthlyFee, festiveFee, feeMonth, registrationNo, number, schoolEmail, session,
            paymentMode, referenceNo, bankName, remark, receiptBy
        } = req.body;

        console.log('Received new fee data:', req.body);

        // Calculate paidAmount based on MonthlyFee and festiveFee
        const paidAmount = monthlyFee + (festiveFee || 0);

        // Calculate due amount and determine status
        const dueAmount = totalFee - paidAmount;
        const status = dueAmount > 0 ? 'Due' : 'Paid';

        const newFee = new Fee({
            studentID,
            totalFee,
            monthlyFee,
            festiveFee,
            feeMonth,
            registrationNo,
            status,
            number,
            schoolEmail,
            session,
            paymentMode,
            referenceNo,
            bankName,
            remark,
            receiptBy
        });

        const fee = await newFee.save();
        console.log('Saved fee:', fee);

        // Prepare and save FeeNotice
        const feeNotice = new FeeNotice({
            studentID,
            message: 'Default message', // Replace with actual message
            remark: 'Default remark',   // Replace with actual remark
            dueAmount,
            months: 'Default months'    // Replace with actual months
        });

        await feeNotice.save();

        res.status(201).json({ msg: 'Fee record created successfully', fee });
    } catch (err) {
        console.error('Error saving fee:', err.message);
        res.status(500).send('Server error');
    }
});

// Get fee record by ID
router.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`Fetching fee record for id: ${id}`);
    try {
        const fee = await Fee.findById(id).populate('studentID', 'studentID name class dateOfBirth gender aadharNumber email parent.fatherName contactNumber address');
        if (!fee) {
            console.log(`Fee record not found for id: ${id}`);
            return res.status(404).json({ msg: 'Fee record not found' });
        }
        console.log(`Fee record found: ${fee}`);
        res.json(fee);
    } catch (err) {
        console.error(`Error fetching fee record: ${err.message}`);
        res.status(500).send('Server error');
    }
});

// Get all fee records
router.get('/get', async (req, res) => {
    try {
        const fees = await Fee.find().populate('studentID', 'studentID name class dateOfBirth gender aadharNumber email parent.fatherName contactNumber address');
        if (!fees || fees.length === 0) {
            return res.status(404).json({ msg: 'No fee records found' });
        }

        const totalFeesCount = fees.length;
        const totalPaidAmount = fees.reduce((sum, fee) => sum + fee.paidAmount, 0);

        res.json({ fees, totalFeesCount, totalPaidAmount });
    } catch (err) {
        console.error(`Error fetching fee records: ${err.message}`);
        res.status(500).send('Server error');
    }
});

// Update total fee
router.put('/update/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const { totalFee } = req.body;

        const fee = await Fee.findById(req.params.id);
        if (!fee) {
            return res.status(404).json({ msg: 'Fee record not found' });
        }

        fee.totalFee = totalFee;
        fee.dueAmount = totalFee - fee.paidAmount;
        fee.status = fee.dueAmount > 0 ? 'Due' : 'Paid';

        await fee.save();
        res.status(200).json({ msg: 'Total fee updated successfully', fee });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Send notice route
// Send notice route
router.post('/sendNotice/:id', async (req, res) => {
    const { message, remark, dueAmount, months } = req.body;
    const feeID = req.params.id;

    try {
        // Fetch fee details
        const fee = await Fee.findById(feeID).populate('studentID', 'email');
        if (!fee) {
            return res.status(404).json({ msg: 'Fee record not found' });
        }

        // Prepare the email content
        const subject = 'Fee Notice';
        const text = `
            Hello,

            This is a reminder regarding your pending fee. Below are the details:

            Message: ${message}
            Remark: ${remark}
            Due Amount: ${dueAmount}
            Due Months: ${months}

            Please contact the school administration for further information.

            Best regards,
            School Administration
        `;

        // Send the email
        await sendEmail(fee.studentID.email, subject, text);
        console.log(`Notice sent to ${fee.studentID.email}`);

        res.status(200).json({ msg: 'Notice sent successfully' });
    } catch (err) {
        console.error(`Error sending notice: ${err.message}`);
        res.status(500).send('Server error');
    }
});

{/*
router.post('/sendNotice/:id', async (req, res) => {
    const { message, remark, dueAmount, months } = req.body;
    const studentID = req.params.id;

    try {
        // Fetch student details
        const student = await Student.findById(studentID);
        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }

        // Prepare the email content
        const subject = 'Fee Notice';
        const text = `
            Hello ${student.name},
            
            This is a reminder regarding your pending fee. Below are the details:

            Message: ${message}
            Remark: ${remark}
            Due Amount: ${dueAmount}
            Due Months: ${months}

            Please contact the school administration for further information.

            Best regards,
            School Administration
        `;

        // Send the email
        await sendEmail(student.email, subject, text);
        console.log(`Notice sent to ${student.email}`);

        res.status(200).json({ msg: 'Notice sent successfully' });
    } catch (err) {
        console.error(`Error sending notice: ${err.message}`);
        res.status(500).send('Server error');
    }
});
*/}

module.exports = router;



{/*const express = require('express');
const router = express.Router();
const Fee = require('../Models/Fee');
const Student = require('../Models/StudentDetails');
const checkRole = require('../middleware/checkRole');


// Create a fee tar
router.post('/add', async (req, res) => {
    try {
        const {
            studentID, totalFee, monthlyFee, festiveFee, feeMonth, registrationNo, number, schoolEmail, session,
            paymentMode, referenceNo, bankName, remark, receiptBy
        } = req.body;

        console.log('Received new fee data:', req.body);

        // Calculate paidAmount based on MonthlyFee and festiveFee
        const paidAmount = monthlyFee + (festiveFee || 0);

        // Calculate due amount and determine status
        const dueAmount = totalFee - paidAmount;
        const status = dueAmount > 0 ? 'Due' : 'Paid';

        const newFee = new Fee({
            studentID,
            totalFee,
            monthlyFee,
            festiveFee,
            feeMonth,
            registrationNo,
            status,
            number,
            schoolEmail,
            session,
            paymentMode,
            referenceNo,
            bankName,
            remark,
            receiptBy
        });

        const fee = await newFee.save();
        console.log('Saved fee:', fee);
        res.status(201).json({ msg: 'Fee record created successfully', fee });
    } catch (err) {
        console.error('Error saving fee:', err.message);
        res.status(500).send('Server error');
    }
});


// Get fee record by ID

router.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    console.log(`Fetching fee record for id: ${id}`);
    try {
        const fee = await Fee.findById(id).populate('studentID', 'studentID name class dateOfBirth gender aadharNumber email parent.fatherName contactNumber address');
        if (!fee) {
            console.log(`Fee record not found for id: ${id}`);
            return res.status(404).json({ msg: 'Fee record not found' });
        }
        console.log(`Fee record found: ${fee}`);
        res.json(fee);
    } catch (err) {
        console.error(`Error fetching fee record: ${err.message}`);
        res.status(500).send('Server error');
    }
});

router.get('/get', async (req, res) => {
    try {
        const fees = await Fee.find().populate('studentID', 'studentID name class dateOfBirth gender aadharNumber email parent.fatherName contactNumber address');
        if (!fees || fees.length === 0) {
            return res.status(404).json({ msg: 'No fee records found' });
        }

        const totalFeesCount = fees.length;
        const totalPaidAmount = fees.reduce((sum, fee) => sum + fee.paidAmount, 0);

        res.json({ fees, totalFeesCount, totalPaidAmount });
    } catch (err) {
        console.error(`Error fetching fee records: ${err.message}`);
        res.status(500).send('Server error');
    }
});



// Update total fee
router.put('/update/:id', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const { totalFee } = req.body;

        const fee = await Fee.findById(req.params.id);
        if (!fee) {
            return res.status(404).json({ msg: 'Fee record not found' });
        }

        fee.totalFee = totalFee;
        fee.dueAmount = totalFee - fee.paidAmount;
        fee.status = fee.dueAmount > 0 ? 'Due' : 'Paid';

        await fee.save();
        res.status(200).json({ msg: 'Total fee updated successfully', fee });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;

{/*
// Generate fee notice for students with due fees
router.get('/notice/:studentID', checkRole(['admin', 'teacher']), async (req, res) => {
    try {
        const studentID = req.params.studentID;
        const fee = await Fee.findOne({ studentID }).populate('studentID', 'studentID name class dateOfBirth gender aadharNumber email  parent.fatherName contactNumber');

        if (!fee) {
            return res.status(404).json({ msg: 'Fee record not found' });
        }

        if (fee.status === 'Paid') {
            return res.status(200).json({ msg: 'No due fees' });
        }

        const student = await Student.findById(studentID);

        if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }

        const notice = {
            studentName: student.name,
            studentClass: student.class,
            totalFee: fee.totalFee,
            paidAmount: fee.paidAmount,
            dueAmount: fee.dueAmount,
            status: fee.status,
            message: `Dear ${student.name}, your total fee is ₹${fee.totalFee}. You have paid ₹${fee.paidAmount}, and ₹${fee.dueAmount} is still due. Please pay the due amount at your earliest convenience.`
        };

        res.status(200).json(notice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
*/}