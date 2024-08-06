import React from 'react'
import VanCards from '../components/VanCards'
import { Link } from 'react-router-dom'
const Vans = () => {
  return (
    <div id='rugged'>
      <h1>Explore our van options</h1>
      <div className="simmple">
        <Link to='/' className='simple'>
        <button>Simple</button>
        </Link>
        <Link to='/luxuryvan' className='luxury'>
        <button>Luxury</button>
        </Link>
        <Link to='/ruggedvan' className='rugged'>
        <button>Rugged</button>
        </Link>
        <Link to='/vans' className='clear'>
        <button>Clear filters</button>
        </Link>
      </div>
      <div className="cardContainer">
        <VanCards/>
      </div>
    </div>
  )
}

export default Vans
