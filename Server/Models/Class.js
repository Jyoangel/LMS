// models/Class.js

const mongoose = require('mongoose');

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

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,

    },
    date: { type: Date, default: () => new Date() },
    time: { type: String, default: getCurrentTime },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
