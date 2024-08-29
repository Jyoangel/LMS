const mongoose = require('mongoose');
const { Schema } = mongoose;
const numberToWords = require('number-to-words');

const feeSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        ref: 'StudentDetail',
        required: true
    },
    feePaid: {
        type: Number,
        required: true
    },
    otherFee: {
        type: Number
    },
    total: {
        type: Number,
    },
    paidAmount: {
        type: Number,
        required: true,
        default: function () {
            return this.feePaid + (this.otherFee || 0);
        }
    },
    dueAmount: {
        type: Number,
        required: true,
    },
    totalDues: {
        type: Number,
        required: true,
    },
    feeMonth: {
        type: String,
        required: true,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    receiptNo: {
        type: Number,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Due', 'Paid'],
        default: 'Due'
    },
    date: {
        type: Date,
        default: Date.now
    },
    amountInWords: {
        type: String
    },
    paymentMode: {
        type: String
    },
    referenceNo: {
        type: String
    },
    bankName: {
        type: String
    },
    remark: {
        type: String
    },
    printDate: {
        type: Date,
        default: Date.now
    },
    receiptBy: {
        type: String
    },
    srNo: {
        type: Number
    }
}, { timestamps: true });

// Pre-save middleware to set receiptNo, srNo, calculate dueAmount and totalDues
feeSchema.pre('save', async function (next) {
    const doc = this;

    if (doc.isNew) {
        try {
            console.log('New document - generating receiptNo and srNo');
            const lastFee = await mongoose.model('Fee').findOne().sort({ receiptNo: -1 });

            doc.receiptNo = lastFee ? lastFee.receiptNo + 1 : 1;
            console.log('Generated receiptNo:', doc.receiptNo);

            doc.total = doc.feePaid + (doc.otherFee || 0);
            console.log('Calculated total:', doc.total);

            doc.paidAmount = doc.total; // Ensure paidAmount is set correctly
            console.log('Set paidAmount:', doc.paidAmount);

            const student = await mongoose.model('StudentDetail').findById(doc.studentID);
            if (student) {
                console.log('Found student:', student);

                doc.dueAmount = student.monthlyFee - doc.paidAmount;
                console.log('Calculated dueAmount:', doc.dueAmount);

                const totalPaid = await mongoose.model('Fee').aggregate([
                    { $match: { studentID: doc.studentID } },
                    { $group: { _id: null, totalPaidAmount: { $sum: "$paidAmount" } } }
                ]);
                console.log('Total paid amounts for student:', totalPaid);

                doc.totalDues = student.totalFee - (totalPaid[0]?.totalPaidAmount || 0) - doc.paidAmount;
                console.log('Calculated totalDues:', doc.totalDues);

                doc.status = doc.totalDues <= 0 ? 'Paid' : 'Due';
                console.log('Determined status:', doc.status);

                doc.amountInWords = numberToWords.toWords(doc.paidAmount) + ' only';
                console.log('Converted amountInWords:', doc.amountInWords);

                const lastSrNoFee = await mongoose.model('Fee').findOne().sort({ srNo: -1 });
                doc.srNo = lastSrNoFee ? lastSrNoFee.srNo + 1 : 1;
                console.log('Generated srNo:', doc.srNo);

                next();
            } else {
                console.log('Student not found');
                next(new Error('Student not found'));
            }
        } catch (err) {
            console.error('Error in pre-save middleware:', err);
            next(err);
        }
    } else {
        next();
    }
});

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;


{/*
const feeSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        ref: 'StudentDetail',
        required: true
    },
    feePaid: {
        type: Number,
        required: true
    },
    otherFee: {
        type: Number
    },
    total: {
        type: Number,
    },
    paidAmount: {
        type: Number,
        required: true,
        default: function () {
            return this.feePaid + (this.otherFee || 0);
        }
    },
    dueAmount: {
        type: Number,
        required: true,
        default: function () {
            return this.totalFee - this.paidAmount;
        }
    },
    feeMonth: {
        type: String,
        required: true,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    receiptNo: {
        type: Number,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Due', 'Paid'],
        default: 'Due'
    },
    registrationNo: {
        type: String
    },
    number: {
        type: String
    },
    schoolEmail: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    },
    amountInWords: {
        type: String
    },
    paymentMode: {
        type: String
    },
    referenceNo: {
        type: String
    },
    bankName: {
        type: String
    },
    remark: {
        type: String
    },
    printDate: {
        type: Date,
        default: Date.now
    },
    receiptBy: {
        type: String
    },
    srNo: {
        type: Number
    }
}, { timestamps: true });

// Calculate total based on MonthlyFee and festiveFee
feeSchema.pre('save', async function (next) {
    const doc = this;

    if (doc.isNew) {
        try {
            console.log('New document - generating receiptNo and srNo');
            const lastFee = await Fee.findOne().sort({ receiptNo: -1 });
            console.log('Last fee found:', lastFee);

            if (lastFee) {
                doc.receiptNo = lastFee.receiptNo + 1;
            } else {
                doc.receiptNo = 1;
            }

            // Calculate total based on MonthlyFee and festiveFee
            doc.total = doc.feePaid + (doc.otherFee || 0);

            // Calculate due amount and determine status
            doc.dueAmount = doc.totalFee - doc.paidAmount;
            doc.status = doc.dueAmount <= 0 ? 'Paid' : 'Due';

            // Convert paidAmount to words
            doc.amountInWords = numberToWords.toWords(doc.paidAmount) + ' only';

            // Calculate srNo dynamically
            const lastSrNoFee = await Fee.findOne().sort({ srNo: -1 });
            doc.srNo = lastSrNoFee ? lastSrNoFee.srNo + 1 : 1;

            console.log('New fee with receiptNo and srNo:', doc);
            next();
        } catch (err) {
            console.error('Error in pre save:', err);
            next(err);
        }
    } else {
        next();
    }
});

const Fee = mongoose.model('Fee', feeSchema);

module.exports = Fee;
*/}
