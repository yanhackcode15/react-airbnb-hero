import React from "react"
import Card from "./card"
import card1 from "../images/card 1.png"
import CardData from "../../data"

export default function Experiences() {
    const mapper = function (card){
        console.log(card.coverImg)
        return (<li className="card">
        <Card 
        image={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country="USA"        
        title={card.title}
        price={card.price}
        />
        </li>)
    }
    const cards = CardData.map(mapper)
    return (
        <div>
           <div className="experiences-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <ul className="cards">
                {cards}              
            </ul>
        </div>
    )
}