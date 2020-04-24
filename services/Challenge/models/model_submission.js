const mongoose = require('mongoose')

const SubmissionSchema = mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Challenge"
    }
})

module.exports = mongoose.model('Submission', SubmissionSchema)