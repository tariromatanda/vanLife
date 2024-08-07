import React, { useState } from 'react';
import DashboardCards from '../../components/DashboardCard';
import cream from"../../assets/cream.png"
import blue from"../../assets/blue.png"
import green from"../../assets/green.png"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div id='Container'>
        <ul className='Tabs active-tabs'>
        <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
        <li onClick={() => setActiveTab('income')}>Income</li>
        <li onClick={() => setActiveTab('vans')}>Vans</li>
        <li onClick={() => setActiveTab('reviews')}>Reviews</li>
      </ul>
      {activeTab === 'dashboard' && (
        <div>
<div className="welcome">
  <h2>
    Welcome!
  </h2>
  <div className="incomeAndDetails">
    <p>
      Income last 30 days
    </p>
    <p>Details</p>
  </div>
  <h1>$2,260</h1>
  <div className="reviewScore">
    <h3>Review score ⭐5.0/<span>5</span></h3>
    <p>Details</p>
  </div>
</div>
<div className="listedVanContainer">
  <div className="viewall">
    <h2>
      Your listed van
    </h2>
    <p>
      view all
    </p>
  </div>
  <div className="cardWrapper">


  <DashboardCards
  pic={cream} 
  vanName={"Modest Explorer"}
  price={"$60/day"}
  editText={"Edit"}
  />
    <DashboardCards
  pic={blue} 
  vanName={"Beach Bum"}
  price={"$80/day"}
  editText={"Edit"}
  />
    <DashboardCards
  pic={green} 
  vanName={"Green Wonder"}
  price={"$70/day"}
  editText={"Edit"}
  />  </div>
</div>
        </div>
      )}

      {activeTab === 'income' && (
        <div>
          <h2>Income Content</h2>
<p>11111111111111111111111111111111111111111111111111111</p>
        </div>
      )}

      {activeTab === 'vans' && (
        <div>
        <div className="listedVanContainer">
  <div className="viewall">
    <h2>
      Your listed van
    </h2>
   
  </div>
  <DashboardCards
  pic={cream} 
  vanName={"Modest Explorer"}
  price={"$60/day"}
  />
    <DashboardCards
  pic={blue} 
  vanName={"Beach Bum"}
  price={"$80/day"}
  />
    <DashboardCards
  pic={green} 
  vanName={"Green Wonder"}
  price={"$70/day"}
  />
</div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div>
          <h2>Reviews Content</h2>
    <p>33333333333333333333333333333333333333333</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
