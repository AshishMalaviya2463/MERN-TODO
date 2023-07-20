const express = require( "express" );
const router = express.Router();
const app = express()
app.use( express.json() )
const authController = require( "../controllers/authController" )

router.post( "/register", authController.registrationController )
router.post( "/login", authController.loginController )

module.exports = router