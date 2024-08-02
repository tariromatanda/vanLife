import React from 'react'
import Singlecard from '../../components/Singlecard'
import all from '../../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const Van = () => {
    return (
        <>
            <div id='single'>
                <div className="back">
                    <Link to='/vans' className="arrow">
                        <img src={all} alt="" />
                        <a href="">Back to all vans</a>
                    </Link>
                    <div className="card">
                        <Singlecard/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Van
