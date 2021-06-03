import React from 'react'
import {Link, Redirect} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navigation">
            <nav>
                <div className="wrapper">
                <Link to="/" className="home-btn">Home</Link>
                </div>
                <div className="wrapper">
                <Link to="/Portfolio" className="portfolio-btn">Portfolio</Link>
                </div>
                <div className="wrapper">
                <Link to="/AboutMe" className="about-btn">About Me</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
