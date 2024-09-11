const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'p:m' : 'a:m';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
};

// ExamSubject schema
const ExamSubjectSchema = new Schema({
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        trim: true
    },
    examination_date: {
        type: Date,
        required: [true, 'Examination date is required'],
    }
});

// AdmitCard schema
const AdmitCaardSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId, // Reference to StudentDetail model
        ref: 'StudentDetail', // Assuming StudentDetail is the model name
        required: [true, 'Student ID is required'],
        unique: true
    },
    examination_roll_number: {
        type: String,
        unique: true,
        required: [true, 'Examination roll number is required'],
    },
    school_name: {
        type: String,
        default: 'DPS',
        required: true
    },
    examination: {
        type: String,
        required: [true, 'Examination is required'],
        trim: true
    },
    startdate: {
        type: Date,
        required: [true, 'Start date is required'],
    },
    enddate: {
        type: Date,
        required: [true, 'End date is required'],
    },
    examstarting_time: {
        type: String,
        required: [true, 'Exam starting time is required'],
    },
    examending_time: {
        type: String,
        required: [true, 'Exam ending time is required'],
    },
    examsubjects: {
        type: [ExamSubjectSchema],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: 'At least one exam subject is required'
        }
    },
    admitCard: {
        type: String,
        default: 'admit card'
    },
    date: { type: Date, default: () => new Date() },
    time: { type: String, default: getCurrentTime },
}, {
    id: false,
});

// Create model from schema
const AdmitCaard = mongoose.model('AdmitCaard', AdmitCaardSchema);

module.exports = AdmitCaard;
