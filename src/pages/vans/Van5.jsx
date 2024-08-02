import React from 'react'
import CruiseCard from '../../components/CruiseCard'
import { Link } from 'react-router-dom'
import all from '../../assets/arrow-left.svg'
const Van5 = () => {
  return (
    <>
                 <div id='single'>
                <div className="back">
                    <Link to='/vans' className="arrow">
                        <img src={all} alt="" />
                        <a href="">Back to all vans</a>
                    </Link>
                    <div className="card">
                        <CruiseCard/>
                    </div>

                </div>
            </div> 
    </>
  )
}

export default Van5
