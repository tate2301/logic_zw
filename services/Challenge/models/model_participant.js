const mongoose = require('mongoose')

const ParticipantSchema = mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Challenge"
    }
})

module.exports = mongoose.model('Participant', ParticipantSchema)