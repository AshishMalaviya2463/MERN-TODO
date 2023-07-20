const User = require( "../models/userModel" )
const bcryptjs = require( "bcryptjs" )
const jwt = require( "jsonwebtoken" )

exports.registrationController = async ( req, res ) => {
    try {
        const body = req.body
        const newPass = await bcryptjs.hash( body.password, 12 )
        const user = new User( { ...body, password: newPass } )
        await user.save()

        res.status( 201 ).send( { message: 'Registration successful' } );
    } catch ( error ) {
        res.status( 500 ).send( {
            message: "Internal Server Error"
        } )
    }
}

exports.loginController = async ( req, res ) => {
    try {
        const body = req.body
        const user = await User.find( { email: body.email } )

        if ( user?.length > 0 ) {
            const passCompare = await bcryptjs.compare( body.password, user[ 0 ]?.password )
            if ( passCompare ) {
                const token = jwt.sign( { ...user[ 0 ] }, process.env.JWT_SECRET, { expiresIn: "24h" } )
                await User.findByIdAndUpdate( user[ 0 ]?._id, { token } )
                const userData = {
                    _id: user[ 0 ]?._id,
                    name: user[ 0 ]?.name,
                    email: user[ 0 ]?.email,
                    createdAt: user[ 0 ]?.createdAt,
                    updatedAt: user[ 0 ]?.updatedAt
                }
                res.status( 200 ).send( { user: userData, token, message: 'Login successful' } );
            } else {
                res.status( 401 ).send( { message: 'Invalid credentials' } );
            }
        } else {
            res.status( 401 ).send( { message: 'Invalid credentials' } );
        }
    } catch ( error ) {
        res.status( 500 ).send( {
            message: "Internal Server Error"
        } )
    }
}