import React from 'react'
import MainButton from '../components/MainButton'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <div className="home-inner">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
         <Link to='/vans'><MainButton title={"Find your van"} /></Link> 
         
      </div>
    
    </div>
    
  )
}

export default Home
