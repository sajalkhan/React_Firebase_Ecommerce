import React,{useState} from 'react'
import './signup.scss'

import CustomInputText from '../custom-Input/custom_Input'
import CustomButton from '../custom-button/custom-button'
import {auth, createUserProfileDocument} from '../../firebase/firebase-util'

const SignUp =()=> {

    const [state, setState] = useState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = state;

        if(password!==confirmPassword) {
            alert("pasword don't match");
            return;
        }

        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            setState({
                email: '',
                password: '',
                displayName: '',
                confirmPassword: ''
            });
            
        } catch (error) {
            console.error(error);
        }

    }

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>

                <CustomInputText
                    name="displayName"
                    type="text"
                    value={state.displayName || ''}
                    handleChange={handleChange}
                    label='Name'
                    required />

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
                
                <CustomInputText
                    name="confirmPassword"
                    type="password"
                    value={state.confirmPassword || ''}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required />

                <CustomButton type="submit">sign up</CustomButton>

            </form>
        </div>
    )
}

export default SignUp;