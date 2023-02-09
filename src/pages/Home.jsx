import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css"
import '../styles/App.css'
import headshot from '../assets/headshot1.jpeg'

const Home = () => {
    return (
        <section className="home">
            <h1 className="section__title section__title--home">
                Hi! I'm <span className="section__title--name">Megan Korling</span>
            </h1>
            <p className="section__subtitle section__subtitle--home">
                Full Stack Software Developer
                <a href="https://www.linkedin.com/in/megan-korling-17804557" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </p>
            <img src={headshot} alt="headshot of me" className="home__img"/>
            
        </section>
    )
}

export default Home;