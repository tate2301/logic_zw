const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
    accountNumber: String,
    accountBalance: Number,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }
})

module.exports = mongoose.model('Account', AccountSchema)