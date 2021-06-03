import React from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faRProject } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare} from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
// import ProjectCard from '../Components/ProjectCard'




const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Navbar />
            <div className="icon-container">
            <h1 className="font-icon">
            <FontAwesomeIcon icon={faReact} size='80x'/>
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faJsSquare} />
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faCss3} />
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faPython} />
            </h1>
            </div>
            <div className="project-container">
                {/* <ProjectCard /> */}
            </div>
        </div>
    )
}

export default Portfolio
