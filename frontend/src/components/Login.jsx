import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAction, registerAction } from '../redux/actions/authActions'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ showLoginForm, setShowLoginForm ] = useState( true )
    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        password: ""
    } )
    const [ errors, setErrors ] = useState( {} )

    const onChangeInput = ( e ) => {
        setFormData( prevData => ( {
            ...prevData,
            [ e.target.name ]: e.target.value
        } ) )
        setErrors( {} )
    }

    const handleValidation = () => {
        let valid = false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if ( !showLoginForm && formData.name?.trim()?.length === 0 ) {
            setErrors( { name: "Please enter name." } )
        } else if ( !showLoginForm && formData.name?.trim()?.length <= 2 ) {
            setErrors( { name: "Please enter valid name." } )
        } else if ( formData.email?.trim()?.length === 0 ) {
            setErrors( { email: "Please enter email." } )
        } else if ( !emailRegex.test( formData.email ) ) {
            setErrors( { email: "Please enter valid email." } )
        } else if ( formData.password?.trim()?.length === 0 ) {
            setErrors( { password: "Please enter password." } )
        } else if ( formData.password?.length < 6 ) {
            setErrors( { password: "Password must be at least 6 characters long." } )
        } else {
            valid = true
        }
        return valid
    }

    const resetAll = () => {
        setShowLoginForm( true )
        setFormData( {
            name: "",
            email: "",
            password: ""
        } )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        const valid = handleValidation()

        if ( valid ) {
            if ( showLoginForm ) {
                dispatch( loginAction( formData, resetAll, navigate ) )
            } else {
                dispatch( registerAction( formData, resetAll ) )
            }
        }
    }

    return (
        <div className='d-flex align-items-center justify-content-center mh-100 login_form'>
            <form onSubmit={e => handleSubmit( e )}>
                <h2 className='text-center mb-4'>
                    {
                        showLoginForm ? "Log in" : "Registration"
                    }
                </h2>
                {
                    !showLoginForm &&
                    <>
                        <label className='mb-1'>Name:</label><br />
                        <input
                            name="name"
                            type={"text"}
                            placeholder="Enter Name"
                            className='py-1 w-100 todo_input'
                            value={formData.name}
                            onChange={e => onChangeInput( e )}
                        />
                        {errors.name && <p className='text-danger m-0'>{errors.name}</p>}
                    </>
                }
                <label className={`mb-1 ${showLoginForm ? "" : "mt-4"}`}>E-mail:</label><br />
                <input
                    name="email"
                    type={"email"}
                    placeholder="Enter E-mail"
                    className='py-1 w-100 todo_input'
                    value={formData.email}
                    onChange={e => onChangeInput( e )}
                />
                {errors.email && <p className='text-danger m-0'>{errors.email}</p>}
                <label className='mb-1 mt-4'>Password:</label><br />
                <input
                    name="password"
                    type={"password"}
                    placeholder="Enter Password"
                    className='py-1 w-100 todo_input'
                    value={formData.password}
                    onChange={e => onChangeInput( e )}
                />
                {errors.password && <p className='text-danger m-0'>{errors.password}</p>}
                <div className='text-center mt-4'>
                    <button className='todo_btn w-50 mt-3 mx-auto' type='submit'>
                        {
                            showLoginForm ? "Log in" : "Register"
                        }
                    </button>
                    <p className='mt-3'>
                        {
                            showLoginForm
                                ?
                                <>
                                    Don't have an account ? <strong className='cursor-pointer' onClick={() => {
                                        setFormData( {
                                            name: "",
                                            email: "",
                                            password: ""
                                        } )
                                        setShowLoginForm( false )
                                    }}>Register</strong>
                                </>
                                :
                                <>
                                    Already have an account ? <strong className='cursor-pointer' onClick={() => {
                                        setFormData( {
                                            name: "",
                                            email: "",
                                            password: ""
                                        } )
                                        setShowLoginForm( true )
                                    }}>Log in</strong>
                                </>
                        }
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login