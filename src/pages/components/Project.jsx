import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Project.css"
import "../../styles/App.css"

const Project = (props) => {
    return (
        <section className="project__item">
            <h3>{props.title}</h3>
            <p className="project__item--tech">
                {props.tech}
            </p>
            <p className="project__item--description">
                <a className="social" href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                {props.description}
            </p>
            <img src={props.image} alt="describing project" className="project__item--img"/>
        </section>
    )
}

export default Project