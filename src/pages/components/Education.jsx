import '../../styles/SingleEntry.css'

const Education = (props) => {
    return (
        <div className='singleContainer'>
            <h3>{props.school}</h3>
            <p>{props.location}</p>
            <p>{props.dates}</p>
            <p>{props.degree}</p>
            <p>{props.focus}</p>
        </div>
    )
}

export default Education;