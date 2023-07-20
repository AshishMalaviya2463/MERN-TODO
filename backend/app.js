const express = require( "express" );
const Todo = require( "./models/todoModels" );
require( 'dotenv' ).config();
require( "./conn" )
const cors = require( "cors" );
const router = require( "./routes/index" )
const app = express()

app.use( cors() )
app.use( express.json() )

app.use( "/api", router )

app.listen( 5000 )