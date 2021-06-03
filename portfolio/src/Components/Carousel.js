import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faFileWord} from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
    return (
        <div>
            <div className="carousel">
                <h1>Contacts</h1>
            <a href="https://github.com/Gregory-Alexander-Bertrand" className="contact-icon">
         <FontAwesomeIcon icon={faGithub} />
         </a>
         <a href="https://www.linkedin.com/in/gregory-bertrand-7b4827143/" className="contact-icon">
             <FontAwesomeIcon icon={faLinkedin} />
         </a>
         <a href="https://codepen.io/gregorybertran2" className="contact-icon">
             <FontAwesomeIcon icon={faCodepen} />
         </a>
         <a href="https://docs.google.com/document/d/15RxCrcHAl_EqXdaQi1CQF7XAp-KEETAHOXcQzzYinhY/edit" className="contact-icon">
            <FontAwesomeIcon icon={faFileWord} />
         </a>
            </div>
        </div>
    )
}

export default Carousel
