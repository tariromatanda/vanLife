<<<<<<< HEAD
import React from 'react'



const Navbar = () => {
  return (
    <section className="nav-bar">
      <div className="logo">
        <h1>#CarRental</h1>
      </div>
      <nav className='navbar'>
        <a href="">About</a>
        <a href="">Van</a>
      </nav>
    </section>
  )
}

export default Navbar
=======
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
>>>>>>> ca8968086e69521ff43f88fa25007f2868e254c2
