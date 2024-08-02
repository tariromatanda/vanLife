
import React from 'react'
import data from '../../data/cruiser'
const CruiseCard = () => {
  return (
    <>
          {data && data.CruiseCard.map(card =>{
        return(
            <div className="Singlcard">
                <div className="cream">
                    <img src={card.image} alt="" />
                </div>
                <div className="stuff">
                    <button>{card.btn}</button>
                    <h2>{card.tittle}</h2>
                    <h3>{card.price}<span>{card.day}</span></h3>
                    <p>{card.desc}</p>
                    <div className="rent">
                    <button>{card.btn1}</button>
                    </div>
                   
                </div>
            </div>
        )
      })}
      
    </>
  )
}

export default CruiseCard
