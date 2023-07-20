const mongoose = require( "mongoose" )

const User = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String
    }
}, { timestamps: true } )

module.exports = mongoose.model( 'users', User )