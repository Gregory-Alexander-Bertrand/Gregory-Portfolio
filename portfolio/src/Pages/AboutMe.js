import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'

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
                <p className="personal-story">I'm a Front-End Web-Developer, writer and copy editor. As a writer, I take left-brained analytical approaches to problems in Web-Development. </p>
                <p className="personal-story">I believe in taking an aesthetically pleasing, narrative-focused themes to whatever I create. Whether that's application design, web-design, clean-code or clean-copy.</p>
                <Carousel />
                <h1>Email: gregoryalexbertrand@gmail.com</h1>
            </section>
        </div>
    )
}

export default AboutMe
