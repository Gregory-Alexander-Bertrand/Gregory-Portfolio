import React from 'react'

const Carousel = () => {
    return (
        <div className="carousel">
            <input type="radio" name="contact" checked/>
            <input type="radio" name="contact" />
            <input type="radio" name="contact" />
            <input type="radio" name="contact" />
            <main id="carousel">
                <div className="contact-info">
                    <h3 className="contact-info-card">GitHub</h3>
                </div>
                <div className="contact-info">
                    <h3 className="contact-info-card">CodePen</h3>
                </div>
                <div className="contact-info">
                    <h3 className="contact-info-card">Email</h3>
                </div>
                <div className="contact-info">
                    <h3 className="contact-info-card">LinkedIn</h3>
                </div>
            </main>
        </div>
    )
}

export default Carousel
