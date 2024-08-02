import React from 'react'
import { Link } from 'react-router-dom'
import WonderCards from '../../components/WonderCards'
import all from '../../assets/arrow-left.svg'
const Van6 = () => {
  return (
    <div>
                  <div id='single'>
                <div className="back">
                    <Link to='/vans' className="arrow">
                        <img src={all} alt="" />
                        <a href="">Back to all vans</a>
                    </Link>
                    <div className="card">
                        <WonderCards/>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Van6
