import '../../styles/SingleEntry.css'

const Work = (props) => {
    const descriptions = props.description.map((d, index) => (
        <li key={index}>{d}</li>
    ));
    return (
        <div className='history__item'>
            <h3 className='history__item--subtitle'>{props.company}</h3>
            <p>{props.title}</p>
            <p className='history__item--small'>{props.dates}</p>
            <p className='history__item--small'>{props.location}</p>
            <ul className='history__item--list'>
                {descriptions}
            </ul>
        </div>
    )
}

export default Work;