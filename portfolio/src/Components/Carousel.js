import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'

const Carousel = () => {
    return (
        <div>
            <div className="carousel">
                <h1>My Socials</h1>
            <a href="https://github.com/Gregory-Alexander-Bertrand" className="contact-icon">
         <FontAwesomeIcon icon={faGithub} />
         </a>
         <a href="https://www.linkedin.com/in/gregory-bertrand-7b4827143/" className="contact-icon">
             <FontAwesomeIcon icon={faLinkedin} />
         </a>
         <a href="https://codepen.io/gregorybertran2" className="contact-icon">
             <FontAwesomeIcon icon={faCodepen} />
         </a>
         <h1>Email: gregoryalexbertrand@gmail.com</h1>
            </div>
        </div>
    )
}

export default Carousel
