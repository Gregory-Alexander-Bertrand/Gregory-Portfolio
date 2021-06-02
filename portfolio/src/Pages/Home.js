import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="split left">
            <h1 className="my-header">Gregory Alexander Bertrand</h1>
                <div className="btn left-btn">
                <Link to="/Portfolio" className="portfolio"><span>Portfolio</span></Link>
                </div>
            </div>
            <div className="split right">
                <h1 className="my-header">Front-End Web-Developer. Writer. Editor</h1>
                <div className="btn right-btn">
                <Link to="/AboutMe" className="about-me"><span>About Me</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
