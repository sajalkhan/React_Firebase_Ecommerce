import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo} from '../../Assets/crown.svg'
import './header.scss'

const Header =()=> {
    return (
        <div className='header'>
            <Link to="/">
                 <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                <Link className='option' to='/signin'>SiGN-IN</Link>
            </div>
        </div>
    )
}

export default Header;