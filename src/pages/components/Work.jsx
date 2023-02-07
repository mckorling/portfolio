import '../../styles/SingleEntry.css'

const Work = (props) => {
    const descriptions = props.description.map((d, index) => (
        <li key={index}>{d}</li>
    ));
    return (
        <div className='singleContainer'>
            <h3>{props.company}</h3>
            <p>{props.title}</p>
            <p>{props.dates}</p>
            <p>{props.location}</p>
            <ul>
                {descriptions}
            </ul>
        </div>
    )
}

export default Work;