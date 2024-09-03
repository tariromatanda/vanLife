import React from 'react'
import VanCards from '../components/VanCards'
import { useState } from 'react'

import LuxuryCards from '../components/LuxuryCards'
import SimpleCards from '../components/SimpleCards'
import RuggedCard from '../components/RuggedCard'
const Vans = () => {
  const [toogleState, setToggleState] = useState(4);
  const toggleTab = (index) => {
    ``
    setToggleState(index)
  }
  return (
    <div id='rugged'>
      <h1>Explore our van options</h1>
      <div className="simmple">
        <div className='simple active-simple'>
          <button className={toogleState === 1? 'simple active-simple' : 'simple'} onClick={()=> toggleTab(1)}>Simple</button>
        </div>
        <div className='luxury active-luxury'>
          <button className={toogleState === 2? 'luxury active-luxury' : 'luxury'} onClick={()=> toggleTab(2)}>Luxury</button>
        </div>
        <div className='rugged active-rugged'>
          <button className={toogleState === 3? 'rugged active-rugged' : 'rugged'} onClick={()=> toggleTab(3)}>Rugged</button>
        </div>
        <div className='clear active-clear'>
          <button className={toogleState === 4? 'clear active-clear' : 'clear'} onClick={()=> toggleTab(4)}>Clear filters</button>
        </div>
      </div>
      <div className="content-simple">
        <div className={toogleState === 1? 'content active-content' : 'content'}>
          <div className="cardComponents">
         <SimpleCards/>
         </div>
        </div>
        <div className={toogleState === 2? 'content active-content' : 'content'}>
        <div className="cardComponents">
          <LuxuryCards/>
          </div>
        </div>
        <div className={toogleState === 3? 'content active-content' : 'content'}>
        <div className="cardComponents">
         <RuggedCard/>
         </div>
        </div>
        <div className={toogleState === 4? 'content active-content' : 'content'}>
          <div className="cardContainer">
          <VanCards />
          </div>
        
      </div>
      </div>

    </div>
  )
}

export default Vans
