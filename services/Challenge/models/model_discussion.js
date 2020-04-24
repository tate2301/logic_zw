const mongoose = require('mongoose')

const DiscussionSchema = mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Challenge"
    }
})

module.exports = mongoose.model('Discussion', DiscussionSchema)