import React from 'react'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faPython} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNode} from '@fortawesome/free-brands-svg-icons'
import {faSass} from '@fortawesome/free-brands-svg-icons'
const Skills = () => {
    return (
        <div className="skills-container">
            <div className="words word-2">
                <span>S</span>
                <span>K</span>
                <span>I</span>
                <span>L</span>
                <span>L</span>
                <span>S</span>
            </div>
            <div className="icon-container">
            <FontAwesomeIcon icon={faHtml5}  className="icon"/>
            <FontAwesomeIcon icon={faCss3}  className="icon"/>
            <FontAwesomeIcon icon={faJs} className="icon"/>
            <FontAwesomeIcon icon={faReact} className="icon"/>
            <FontAwesomeIcon icon={faPython} className="icon"/>
            <FontAwesomeIcon icon={faNode} className="icon"/>
            <FontAwesomeIcon icon={faSass} className="icon"/>
            </div>
        </div>
    )
}

export default Skills
