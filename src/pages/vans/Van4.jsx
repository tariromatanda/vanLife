import React from 'react'
import DreamCard from '../../components/DreamCard'
import all from '../../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
const Van4 = () => {
  return (
    <>
       <div id='single'>
                <div className="back">
                    <Link to='/vans' className="arrow">
                        <img src={all} alt="" />
                        <a href="">Back to all vans</a>
                    </Link>
                    <div className="card">
                        <DreamCard/>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Van4
