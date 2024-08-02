

import React from 'react'
import data from '../../data/dream'
import { Link } from 'react-router-dom'
const DreamCard = () => {
  return (
    <>
         {data && data.DreamCard.map(card =>{
        return(
            <div className="Singlcard">
                <div className="blue">
                    <img src={card.image} alt="" />
                </div>
                <div className="stuff">
                    <button>{card.btn}</button>
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

export default DreamCard
