import React from 'react'
import data from '../../data/beach'
import { Link } from 'react-router-dom'
const BeachCard = () => {
  return (
    <>
      {data && data.BeachCard.map(card =>{
        return(
            <div className="Singlcard">
                <div className="blue">
                    <img src={card.image} alt="" />
                </div>
                <div className="stuff">
                    <button className={card.class}>{card.btn}</button>
                    <h2>{card.tittle}</h2>
                    <h3>{card.price}<span>{card.day}</span></h3>
                    <p>{card.desc}</p>
                    <div className="rent">
                    <Link to='/signs'><button>{card.btn1}</button></Link>
                    </div>
                   
                </div>
            </div>
        )
      })}
    </>
  )
}

export default BeachCard
