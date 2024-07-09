const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define FeeNotice schema
const FeeNoticeSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        ref: 'StudentDetails',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    remark: {
        type: String,
        required: true
    },
    dueAmount: {
        type: Number,
        required: true
    },
    months: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('FeeNotice', FeeNoticeSchema);
