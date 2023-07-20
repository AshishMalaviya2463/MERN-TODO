const express = require( "express" );
require( 'dotenv' ).config();
const router = express.Router();

const TodoRoute = require( "./todoRoutes" );
const authRoute = require( "./authRoutes" )

router.use( "/", authRoute );
router.use( "/todo", TodoRoute );

module.exports = router;
