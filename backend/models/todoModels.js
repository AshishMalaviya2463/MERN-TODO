const mongoose = require( "mongoose" )


const Todo = new mongoose.Schema( {
    todo: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
}, { timestamps: true } )

module.exports = mongoose.model( 'todos', Todo )