import React from 'react'

import all from '../../src/assets/arrow-left.svg'
import '../../src/dashboard.scss'
import mode from '../../src/assets/cream.png'

import { useState } from 'react'
const ModestExplorer = () => {
    const [activeTab, setActiveTab] = useState("details");
    const [toogleState, setToggleState] = useState('Dashboard');
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div>
            <div className= {toogleState === 'vans' ? 'Dashboard' : 'vans'} onClick={() => toggleTab('vans')} >
            <div className="arrow">
                <img src={all} alt="" />
                <a href="">Back to all vans</a>
            </div>
            </div>
            
            <div className="xplorer">
                <div className='cream'>
                    <img src={mode} alt="" />
                </div>
                <div className="sixty">
                    <button>Simple</button>
                    <h1>Modest Explorer</h1>
                    <h2>60<span>/day</span></h2>

                </div>
            </div>
            <div className="tabscontainer">
                <ul className='tab active-tab'>
                    <li onClick={() => setActiveTab("details")}>Details</li>
                    <li  onClick={() => setActiveTab("pricing")}>Pricing</li>
                    <li  onClick={() => setActiveTab("photos")}>Photos</li>
                </ul>
                {activeTab === "details" && (
                    <div className='details'>
                        <h2>Name: <span>Modest Explorer</span></h2>
                        <h2>Category: <span>Simple</span></h2>
                        <p>Description: <span>The Modest explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</span></p>
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
                        <img src={mode} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModestExplorer
