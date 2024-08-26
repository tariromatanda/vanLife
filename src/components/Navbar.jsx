import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <Logo logoTitle={'#CarRental'}/>
            </Link>
<div className="links">
    <div className="host">
        <ul>
            <Link to ="#">Host</Link>
        </ul>
    </div>
    <div className="about">
            <ul>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </ul>
            </div>
            <div className="contact">
                <Link to ="#"></Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
