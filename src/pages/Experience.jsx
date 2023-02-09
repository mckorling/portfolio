import educationHistory from '../data/education.json'
import workHistory from '../data/work.json'
import Education from './components/Education'
import Work from './components/Work'
import '../styles/Experience.css'

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
        <section className='experience'>
            <h2 className='section__subtitle--experience'>Work History</h2>
            {workComponents}
            <h2 className='section__subtitle--experience'>Education</h2>
            {educationComponents}
        </section>
    )
}

export default Experience;