import projectData from "../data/projectsData.json"
import Project from "./components/Project"
import '../styles/Projects.css'
import '../styles/App.css'

const Projects = () => {
    const projectComponents = projectData.map((p) => (
        <Project
            key={p.id}
            title={p.title}
            tech={p.techStack}
            description={p.description}
            image={p.image}
            github={p.ghLink}
            activeLink={p.activeLink}
        ></Project>
    ))
    return (
        <section className="projects">
            <h2 className="section__title">My Projects</h2>
            {projectComponents}
        </section>
    )
}

export default Projects;