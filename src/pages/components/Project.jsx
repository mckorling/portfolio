import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Project.css"

const Project = (props) => {
    return (
        <section className="project__item">
            <h3>{props.title}</h3>
            <p>{props.tech}</p>
            <p>{props.description}</p>
            <a href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <img src={props.image} alt="describing project" className="project__img"/>
        </section>
    )
}

export default Project