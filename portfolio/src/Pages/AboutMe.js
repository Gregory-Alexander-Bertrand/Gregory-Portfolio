import React from 'react'
import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
    return (
        <div className="about">
            <div className="about-container">
            <div className="words word-3">
                <span>W</span>
                <span>H</span>
                <span>O</span>
            </div>
            <div className="words word-4">
                <span>A</span>
                <span>M</span>
            </div>
            <div className="words word-5">
                <span>I</span>
                <span>?</span>
            </div>
            </div>
            <h3>Hello, I'm Gregory. Front-End-Developer, editor and writer located in Houston, Texas.</h3>
            <p>What do I do? I like to make things. I code and I write. I believe those two skills help each other.</p>
            <p>I am inspired to create clean, subtle, narrative-focused websites and applications.</p>
            <p>I write clean, elegant code and copy and have a keen eye for editing and debugging.</p>
            <p>I bring artistic, left-brained solutions to right-brained problems.</p>
            <div className="words words-6">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
            </div>
            <div className="contact-icons">
                <a href="https://github.com/Gregory-Alexander-Bertrand" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/gregory-bertrand-7b4827143/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                </a>
            </div>
        </div>
    )
}

export default AboutMe
