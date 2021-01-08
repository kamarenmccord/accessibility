import React from 'react';
import "./Header.css";
import logo from './images/logo/logo_black_white.png';
import MainContent from './MainContent';

const Header = ({returnFunc}) => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <img src={logo}
                    className='logo'
                    alt='Tobis Home Logo'
                    onClick={()=>returnFunc(MainContent)}
                />
                <h1>Accessibility!</h1>
            </div>
        </header>
    )
}

export default Header
