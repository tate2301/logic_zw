const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    first_names: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    physical_address: {
        type: String,
        required: false
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
    verification: {
        status: {
            type: Boolean,
            default: false
        },
        verificationCode: {
            type: "String",
            default: Math.floor(10000 + Math.random() * 90000)
        }
    },
    payouts: [],
    tags: []
})

module.exports = mongoose.model('Profile', profileSchema)