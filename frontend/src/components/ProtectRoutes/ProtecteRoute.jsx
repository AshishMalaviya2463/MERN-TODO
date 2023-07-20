import { Navigate, useLocation } from "react-router-dom"
import { authToken } from "../../constant"

const ProtecteRoute = ( { children } ) => {

    const token = localStorage.getItem( authToken )
    const pathname = useLocation().pathname

    if ( token ) {
        if ( pathname?.includes( "login" ) === false ) {
            return children
        } else {
            return <Navigate to="/" replace />
        }
    } else {
        if ( pathname?.includes( "login" ) ) {
            return children
        } else {
            return <Navigate to="/login" replace />
        }
    }
}

export default ProtecteRoute
