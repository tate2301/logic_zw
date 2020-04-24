const mongoose = require('mongoose')

const CompanySchema = mongoose.Schema({
    companyName: String,
    tagline: String,
    year: String,
    address: String,
    instagram: String,
    facebook: String,
    email: String,
    phone: String
})


module.exports = mongoose.model('Company', CompanySchema)