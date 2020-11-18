import React from 'react'
import './signin-signup.scss'

import Signin from '../../Components/signIn/signin'
import SignUp from '../../Components/signup/signup'

const Signin_Signup =()=> {
    return (
        <div className='signin-signup'>
            <Signin/>
            <SignUp/>
        </div>
    )
}

export default Signin_Signup;