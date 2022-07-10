
import React from "react"
import headshot from "../images/headshot.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function Bio () {
    return (
        <header className="bio">
                <div className="headshot">
                <img src={headshot} className="headshot" />
                </div>
                <div className="center intro">
                    <h3 className="intro-name white-text">Yan Hu</h3>
                    <div className="intro-title orange-text">Slayer of Bugs</div>
                    <div className="site-link">
                    <a href="https://programming90days.godaddysites.com/"><span className="website white-text">My Website</span></a>
                    </div>
                    <div className="buttons">
                        <button className="email-button button"><FontAwesomeIcon icon={solid('envelope')} /><span className="button-text">Email</span></button>
                        <button className="linkedin-button button white-text"><FontAwesomeIcon icon={brands('linkedin')} /><span className="button-text">LinkedIn</span></button>
                    </div>
                </div>
                
        </header>
    )
}

