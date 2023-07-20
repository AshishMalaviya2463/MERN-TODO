import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authToken } from '../../constant'
import { LOGOUT_USER } from '../../redux/ActionTypes'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        localStorage.removeItem( authToken )
        dispatch( { type: LOGOUT_USER } )
        alert( "Log Out Successfull." )
        navigate( "/login" )
    }

    return (
        <div className="outer_shadow">
            <div className='container d-flex justify-content-between align-items-center header_container'>
                <img src='/assets/images/logo1.png' alt='logo' />
                <span className='cursor-pointer py-1' onClick={handleLogOut}>LogOut</span>
            </div>
        </div>
    )
}

export default Header