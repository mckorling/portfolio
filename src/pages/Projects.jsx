import projectData from "../data/projectsData.json"
import ProjectItem from "./components/ProjectItem"
import '../styles/Projects.css'
import '../styles/App.css'

const Projects = () => {
    const projectComponents = projectData.map((p) => (
        <ProjectItem
            key={p.id}
            title={p.title}
            tech={p.techStack}
            description={p.description}
            image={p.image}
            github={p.ghLink}
            activeLink={p.activeLink}
        ></ProjectItem>
    ))
    return (
        <section className="projects">
            <h2 className="section__title section__title--projects">My Projects</h2>
            <div className="projects__list">{projectComponents}</div>
        </section>
    )
}

export default Projects;