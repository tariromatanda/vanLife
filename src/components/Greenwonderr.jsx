import React from 'react'
import green from '../assets/green.png'

import all from '../../src/assets/arrow-left.svg'
import '../../src/dashboard.scss'
import { useState } from 'react'
const Greenwonderr = () => {
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
                    <img src={green} alt="" />
                </div>
                <div className="sixty">
                    <button className='rug'>Rugged</button>
                    <h1>Green Wonder</h1>
                    <h2>70<span>/day</span></h2>

                </div>
            </div>
            <div className="tabscontainer">
                <ul>
                    <li onClick={() => setActiveTab("details")}>Details</li>
                    <li onClick={() => setActiveTab("pricing")}>Pricing</li>
                    <li onClick={() => setActiveTab("photos")}>Photos</li>
                </ul>
                {activeTab === "details" && (
                    <div className='details'>
                        <h2>Name: <span>Green Wonder</span></h2>
                        <h2>Category: <span>Rugged</span></h2>
                        <p>Description: <span>With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle thats perfect for people who are looking for people who looking for a stylish, eco-friendly mode of transport that can go anywhere.</span></p>
                        <p>Visibility: <span>Public</span></p>
                    </div>
                )}
                {activeTab === "pricing" && (
                    <div className="pricing">
                        <h2>$70.00/<span>day</span></h2>
                    </div>
                )}
                {activeTab === "photos" && (
                    <div className="photos">
                        <img src={green} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Greenwonderr
