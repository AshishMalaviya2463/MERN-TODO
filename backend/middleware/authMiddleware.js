const jwt = require( "jsonwebtoken" )

const authMiddleware = async ( req, res, next ) => {
    try {
        const { authorization } = req.headers

        const token = authorization?.split( 'Bearer ' )[ 1 ];

        const verify = jwt.verify( token, "userJWTSecretMERNTODO" )

        if ( verify ) {
            next()
        } else {
            res.status( 401 ).send( { message: "Unauthorized token" } )
        }
    } catch ( err ) {
        res.status( 401 ).send( { message: "Unauthorized token" } )
    }

}

module.exports = authMiddleware