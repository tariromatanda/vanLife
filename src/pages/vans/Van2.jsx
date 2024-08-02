import React from 'react'
import BeachCard from '../../components/BeachCard'
import { Link } from 'react-router-dom'
import all from '../../assets/arrow-left.svg'
const Van2 = () => {
  return (
    <>
                 <div id='single'>
                <div className="back">
                    <Link to='/vans' className="arrow">
                        <img src={all} alt="" />
                        <a href="">Back to all vans</a>
                    </Link>
                    <div className="card">
                        <BeachCard/>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Van2
