import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navBar'>
            <Link to='/'>
                <h1 className="logo">#VANLIFE</h1>
            </Link>

            <ul>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </ul>
        </nav>
    )
}

export default Navbar
