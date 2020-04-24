const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email_address: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.plugin(passportLocalMongoose, {usernameLowerCase: true});


module.exports = mongoose.model('User', userSchema)