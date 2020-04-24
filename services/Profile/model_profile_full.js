const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email_address: {
        type: String
    },
    physical_address: {
        type: String,
    },
    total_points: {
        type: Number,
        default: 0
    },
    phone_number: {
        type: String,
        required: false,
    },
    institute: {
        type: String,
        required: false
    },
    education_level: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    stack: [{
        type: String,
    }],
    payouts: [],
    tags: []
})

module.exports = mongoose.model('Profile', profileSchema)