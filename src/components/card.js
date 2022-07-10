import React from "react"
import card1 from "../images/card 1.png"
import card2 from "../images/card 2.png"
import card3 from "../images/card 3.png"
import star from "../images/star.png"
import dot from "../images/ellipse.png"

export default function Card() {
    return (
        <div>
            <img className="card-image" src={card1} />
                    <div className="ratings">
                        <img className="star-image" src={star} />
                        <span>(5) 6 </span>
                        <img className="dot" src={dot} />
                        <span>USA</span>
                    </div>
                    <div className="lesson-name">
                        <span>Life lessons with Katie Zaferes</span>
                    </div>
                    <div className="lesson-price">
                        <span className="bold">From $136</span> / person
                    </div>
        </div>
    )
}