import React from 'react'
import './custom-button.scss'

const CustomButton = ({ children, isGoogleSignin, addItem, ...otherProps})=> {
    return (
        <button className={`${addItem? 'add-item': ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;