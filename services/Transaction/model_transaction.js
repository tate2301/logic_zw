const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    transactionNumber: String,
    transactionCredit: Number,
    transactionDebit: Number,
    transactionAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)