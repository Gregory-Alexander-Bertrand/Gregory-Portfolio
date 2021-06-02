import React from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faRProject } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare} from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'




const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Navbar />
            <div className="icon-container">
            <h1 className="font-icon">
            <FontAwesomeIcon icon={faReact} size='80x'/>
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faJsSquare} />
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faCss3} />
            </h1>
            <h1 className="font-icon">
                <FontAwesomeIcon icon={faPython} />
            </h1>
            </div>
            <div className="project-container">
                <Card className="project-card">
                    <div className="git-hub-links">
                    <Button variant="outlined">
                        <a href="https://github.com/Gregory-Alexander-Bertrand/Writers-Unblocker-Frontend">Front-End Repo</a>
                    </Button>
                    <Button variant="outlined">
                        <a href="https://github.com/Gregory-Alexander-Bertrand/Writers-Unblocker-Backend">Back-End Repo</a>
                    </Button>
                    </div>
                    <div className="live-site">
                        <Button variant="outlined">
                            <a href="https://writers-unblocker.herokuapp.com/">Live Version</a>
                        </Button>
                    </div>
                    <img src="https://i.imgur.com/9U9QRFm.png" className="project-image"></img>
                    <h4>Writers UnBlocker</h4>
                </Card>
            </div>
        </div>
    )
}

export default Portfolio
