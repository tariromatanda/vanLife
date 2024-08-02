import React from 'react'
import all from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
const LuxuryVan = () => {
  return (
    <div id='single'>
    <div className="back">
      <Link to='/Vans' className="arrow">
          <img src={all} alt="" />
          <a href="">Back to all vans</a>
      </Link>

      
    </div>
  </div>
  )
}

export default LuxuryVan
