import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function Footer () {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                <li><FontAwesomeIcon icon={brands('twitter-square')} /></li>
                <li><FontAwesomeIcon icon={brands('facebook-square')} /></li>
                <li><FontAwesomeIcon icon={brands('instagram-square')} /></li>
                <li><FontAwesomeIcon icon={brands('github-square')} /></li>
            </ul>
        </footer>
    )
}
