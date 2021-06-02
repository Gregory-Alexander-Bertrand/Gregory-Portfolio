import React from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons"


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Navbar />
            <div className="split left">
            <FontAwesomeIcon icon={faReact} size='80x'/>
            </div>
            <div className="split right">
                <h1>TESTING</h1>
            </div>
        </div>
    )
}

export default Portfolio
