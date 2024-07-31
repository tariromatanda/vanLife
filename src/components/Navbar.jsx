import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <Logo logoTitle={'#VANLIFE'}/>
            </Link>

            <ul>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </ul>
        </nav>
    )
}

export default Navbar
