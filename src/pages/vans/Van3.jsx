import React from 'react'
import RedCard from '../../components/RedCard'
import { Link } from 'react-router-dom'
import all from '../../assets/arrow-left.svg'
const Van3 = () => {
  return (
    <>                 
    <div id='single'>
    <div className="back">
        <Link to='/vans' className="arrow">
            <img src={all} alt="" />
            <a href="">Back to all vans</a>
        </Link>
        <div className="card">
            <RedCard/>
        </div>

    </div>
</div>
      
    </>
  )
}

export default Van3
