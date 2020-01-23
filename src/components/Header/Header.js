import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss';
import {ReactComponent as Logo }from '../../assets/crown.svg';


const Header = () =>{

    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo  className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="contact" to='/contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header;