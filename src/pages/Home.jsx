import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <div>
            <h1>Megan Korling</h1>
            <h2>Full Stack Software Developer</h2>
            <ul>
                <li><a href="https://github.com/mckorling" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/megan-korling-17804557" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </div>
    )
}

export default Home;