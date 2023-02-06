import projectData from "../data/projectsData.json"
import Project from "./components/Project"

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
        <div>
            <h2>Projects</h2>
            {projectComponents}
        </div>
    )
}

export default Projects;