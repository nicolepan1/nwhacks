const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    medication_name: {
        required: true,
        type: String
    },
    medication_dosage: {
        required: true,
        type: Number
    },
    reminder_hour: {
        required: true,
        type: Number
    },
    reminder_minutes: {
        required: true,
        type: Number
    },
    phone_number: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)