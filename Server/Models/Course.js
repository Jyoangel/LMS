const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true
    },
    primaryInstructorname: {
        type: String,
        required: true,
        trim: true
    },
    instructorEmail: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    schedule: {
        classDays: [{ type: String }],
        classTime: { type: String },
        startDate: { type: Date },
        endDate: { type: Date }
    },
    courseObjectives: {
        type: String,
        required: true,
        trim: true
    },
    supplementaryMaterials: {
        type: String,
        trim: true
    },
    onlineResources: {
        type: String,
        trim: true
    },
    liveClasses: [{
        type: Schema.Types.ObjectId,
        ref: 'LiveClass'
    }]

}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
