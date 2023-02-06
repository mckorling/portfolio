import educationHistory from '../data/education.json'
import workHistory from '../data/work.json'
import Education from './components/Education'
import Work from './components/Work'

const Experience = () => {
    const educationComponents = educationHistory.map((edu) => (
        <Education
            key={edu.id}
            school={edu.school}
            location={edu.location}
            dates={edu.dates}
            degree={edu.degree}
            focus={edu.focus}
        ></Education>
    ))

    const workComponents = workHistory.map((work) => (
        <Work
            key={work.id}
            company={work.company}
            dates={work.dates}
            title={work.title}
            location={work.location}
            description={work.description}
        ></Work>
    ))

    return (
        <div>
            <h2>Work History</h2>
            {workComponents}
            <h2>Experience</h2>
            {educationComponents}
        </div>
    )
}

export default Experience;