const mongoose = require( "mongoose" )

const dbUrl = process.env.MONGO_URI

mongoose.connect( dbUrl )
    .then( () => {
        console.log( 'Database Connected...' )
    } )
    .catch( err => {
        throw new Error( "Databse Not Connected." )
    } )
