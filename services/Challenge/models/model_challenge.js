const mongoose = require('mongoose')

const challengeSchema = mongoose.Schema({
    title: String,
    tags: [],
    thumbnail: {
        type: String,
        default: ""
    },
    tagline: String,
    sponsored: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: String,
        required: true
    },
    dateStarted: {
        type: String,
        required: true
    },
    created: String,
    description: {},
    started: {
        type: Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default: false
    },
    total_points: {
        type: Number,
        default: 30
    },
    prize_money: {
        type: Number,
        default: 20
    },
    difficulty: {
        type: String,
        default: "Beginner"
    },
    evaluation: {},
    rules: {},
    solution: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Challenge', challengeSchema)