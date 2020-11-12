import React from 'react';
import './style.scss';

const MenuItems = ({ title, imageUrl, size})=> {

    return (
        <div className={`menu-item ${size}`}>
            <div className="background-img" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='sub-title'>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItems;