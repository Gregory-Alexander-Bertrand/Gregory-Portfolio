import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="split left">
                <div className="btn left-btn">
                <Link to="/Portfolio" className="portfolio"><span>Portfolio</span></Link>
                </div>
            </div>
            <div className="split right">
                <div className="btn right-btn">
                <Link to="/AboutMe" className="about-me"><span>About Me</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
