import React from "react"
import star from "../images/star.png"
import dot from "../images/ellipse.png"

export default function Card(props) {
    return (
        <div className={props.className}>
            <img className="card-image" src={props.image} />
                    <div className="ratings">
                        <img className="star-image" src={star} />
                        <span>({props.rating}) {props.reviewCount} </span>
                        <img className="dot" src={dot} />
                        <span>{props.country}</span>
                    </div>
                    <div className="lesson-name">
                        <span>{props.title}</span>
                    </div>
                    <div className="lesson-price">
                        <span className="bold">From ${props.price}</span> / person
                    </div>
        </div>
    )
}