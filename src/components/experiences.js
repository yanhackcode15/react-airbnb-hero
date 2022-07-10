import React from "react"
import Card from "./card"

export default function Experiences() {
    return (
        <div className="experiences-text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <ul className="cards">
                <li className="card">
                    <Card />
                </li>
                <li className="card">
                    <Card />
                </li>
                <li className="card">
                    <Card />
                </li>
            </ul>
        </div>
    )
}