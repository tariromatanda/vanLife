import React from 'react'
import data from '../../data/rugged'
import { Link } from 'react-router-dom'
const RuggedCard = () => {
    return (
        <>
        {data && data.RuggedCard.map(card =>{

return(
            <Link to={card.link} className="RuggedCard">
                <div className="img">
                    <img src={card.image} alt="" />
                </div>
                <div className="texties">
                    <div className="first">
                        <h2>{card.tittle}</h2>
                        <button className='first-one'>{card.btn}{card.btn1}{card.btn2}</button>
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

export default RuggedCard
