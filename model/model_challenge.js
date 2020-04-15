const mongoose = require('mongoose')

const challengeSchema = mongoose.Schema({
    title: String,
    tags: [{
    }],
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
    registered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    submissions: [{
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        },
        reward: {
            type: Number,
            default: 0
        },
        position: Number,
        points: {
            type: Number,
            default: 0
        },
        submission: String,
        submissionTime: {
            type: String,
            default: new Date()
        }
    }],
    evaluation: {},
    rules: {},
    solution: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Challenge', challengeSchema)