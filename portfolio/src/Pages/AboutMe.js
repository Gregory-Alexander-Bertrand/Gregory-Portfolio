import React from 'react'
import Navbar from '../Components/Navbar'

const AboutMe = () => {
    return (
        <div className="about">
            <Navbar />
            <div className="hero">
                <div className="hero-container">
                    <h1 className="name">Gregory Alexander Bertrand</h1>
                    <h2 className="descriptions">Front-End Web-Developer. Writer. Copy Editor. All around creative person.</h2>
                    
                </div>
            </div>
            <section className="content">
                <h3 className="content-header">Everybody has a story. Here's mine</h3>
                <p className="personal-story">I'm a Front-End Web-Developer with past experience in the writing and copy-editing industry. My raison d'etre is to create narrative-focused websites and applications.</p>
                
            </section>
            
        </div>
    )
}

export default AboutMe
