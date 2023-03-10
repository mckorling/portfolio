import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/ProjectItem.css"
import "../../styles/App.css"

const Project = (props) => {
    const active = props.activeLink ? <a className="active" href={props.activeLink} rel="noreferrer" target="_blank">View</a> : <p></p>

    return (
        <section className="project__item">
            <h3>{props.title}</h3>
            <p className="project__item--tech">
                {props.tech}
            </p>
            <p className="project__item--description">
                <a className="social" href={props.github} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                {props.description}
                {active}
            </p>
            <img src={props.image} alt="describing project" className="project__item--img"/>
        </section>
    )
}

export default Project