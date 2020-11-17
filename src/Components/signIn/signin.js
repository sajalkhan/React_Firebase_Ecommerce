import React, { useState } from 'react'
import './signin.scss'

import CustomInputText from '../custom-Input/custom_Input'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase-util'

const Signin = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = event => {
        event.preventDefault();

        setState({ email: '', password: '' });

    }

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span className='title'>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <CustomInputText
                    name="email"
                    type="email"
                    value={state.email || ''}
                    handleChange={handleChange}
                    label='Email'
                    required />

                <CustomInputText
                    name="password"
                    type="password"
                    value={state.password || ''}
                    handleChange={handleChange}
                    label='Password'
                    required />

                <div className='buttons'>
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignin>
                        sign in with Google
                </CustomButton>
                </div>
            </form>

        </div>
    )
}

export default Signin;
