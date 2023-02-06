import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.tech}</p>
            <p>{props.description}</p>
            <a href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    )
}

export default Project