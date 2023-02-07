import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Project.css"

const Project = (props) => {
    return (
        <div className="singleProject">
            <div className="textContainer">
                <h2>{props.title}</h2>
                <p>{props.tech}</p>
                <p>{props.description}</p>
                <a href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div>
                <img src={props.image} alt="describing project"/>
            </div>
        </div>
    )
}

export default Project