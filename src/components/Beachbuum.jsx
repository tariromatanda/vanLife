import React from 'react'

import all from '../../src/assets/arrow-left.svg'
import '../../src/dashboard.scss'
import each from '../assets/blue.png'
import { useState } from 'react'
const Beachbuum = () => {
    const [activeTab, setActiveTab] = useState("details");
    const [toogleState, setToggleState] = useState('Dashboard');
    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <div>
         <div className= {toogleState === 'dashboard' ? 'vans' : 'vans'} onClick={() => toggleTab('vans')} >
          <div className="arrow">
                <img src={all} alt="" />
                <a href="">Back to all vans</a>
            </div>
            </div>
            <div className="xplorer">
                <div className='cream'>
                    <img src={each} alt="" />
                </div>
                <div className="sixty">
                    <button className='rug'>Rugged</button>
                    <h1>Beach Bum</h1>
                    <h2>80<span>/day</span></h2>

                </div>
            </div>
            <div className="tabscontainer">
                <ul className='tab active-tab'>
                    <li onClick={() => setActiveTab("details")}>Details</li>
                    <li onClick={() => setActiveTab("pricing")}>Pricing</li>
                    <li onClick={() => setActiveTab("photos")}>Photos</li>
                </ul>
                {activeTab === "details" && (
                    <div className='details'>
                        <h2>Name: <span>Beach Bum</span></h2>
                        <h2>Category: <span>Rugged</span></h2>
                        <p>Description: <span>Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you wont find in an ordinary camper.</span></p>
                        <p>Visibility: <span>Public</span></p>
                    </div>
                )}
                {activeTab === "pricing" && (
                    <div className="pricing">
                        <h2>$60.00/<span>day</span></h2>
                    </div>
                )}
                {activeTab === "photos" && (
                    <div className="photos">
                        <img src={each} alt="" />
                    </div>
                )}
            </div>
    </div>
  )
}

export default Beachbuum
