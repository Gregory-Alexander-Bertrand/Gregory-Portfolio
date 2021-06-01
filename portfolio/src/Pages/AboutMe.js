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
                <p className="personal-story">To live is to create. To create is to live. If there are any words i live and die by, it's those. Life is all about changes and transitions, and we go through many of them across the spectrum of our lives. Currently, I'm in the middle of the biggest transition period in my life.</p>
                <p className="personal-story">So, who exactly am I, you might be asking. Quite simply I'm a writer/ copy editor entering the world of tech and Front-End Web-Development. I believe the best use for the internet and technology is to foster better communication between humans. Whether that communication is visual or descriptive, and whether I'm designing clean, narrative-focused websites and apps, designing chat bots, or editing technical writing, it's my responsibility to complete my work to the best of my abilities.</p>
                
            </section>
        </div>
    )
}

export default AboutMe
