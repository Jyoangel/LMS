const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportationSchema = new Schema({
    studentName: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    fatherContactNumber: {
        type: String,
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    dropLocation: {
        type: String,
        required: true
    },
    transportationFee: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Transportation', TransportationSchema);
