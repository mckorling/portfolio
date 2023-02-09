import '../../styles/SingleEntry.css'

const Education = (props) => {
    return (
        <div className='history__item'>
            <h3 className='history__item--subtitle'>{props.school}</h3>
            <p className='history__item--small'>{props.location}</p>
            <p className='history__item--small'>{props.dates}</p>
            <p>{props.degree}: {props.focus}</p>
        </div>
    )
}

export default Education;