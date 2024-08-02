import React from 'react'
import data from '../../data/data'
import { Link } from 'react-router-dom'
const VanCards = () => {
    return (
        <>
            {data && data.VanCards.map(card => {
                return (
                    <Link to={card.link}className="VanCards">
                       

                            <div className="img">
                                <img src={card.image} alt="" />
                            </div>
                            <div className="textBox">
                                <div className="first">
                                    <h2>{card.tittle}</h2>
                                    <button>{card.btn}</button>
                                </div>
                                <div className="day">
                                    <h3>{card.tittle2}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                       
         
                    </Link>
                )
            })}
        </>
    )
}

export default VanCards
