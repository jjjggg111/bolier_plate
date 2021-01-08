const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        maxlength: 50
    },
    eamil: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        defualt: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
    type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}