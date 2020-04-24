const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
    challenge: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Challenge"
    }
})

module.exports = mongoose.model('Activity', ActivitySchema)