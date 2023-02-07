import '../styles/About.css'
import headshot from '../assets/headshot1.jpeg'

const About = () => {
    return (
        <div className='about'>
            <h2>Hello, World!</h2>
            <div className='info'>
                <img src={headshot} alt="headshot of me" />
                <p className='aboutText'>
                    I am a full stack developer who is passionate about learning and working on a 
                    team that encourages collaboration, questions, and growth. I have worked in 
                    both Travel and Education in the past and would love to work on something that 
                    helps traveling and/or education be simple and accessible for all. At the end 
                    of the day though, I thrive when I can build products that are helpful and 
                    meaningful to others. I like to be behind the scenes thinking about the bigger 
                    picture- how can a user get the most efficient and smooth experience from this 
                    product? I enjoy working in Python, Java, JavaScript, and React, and am always 
                    excited to learn new languages and frameworks as I grow.
                </p>
            </div>
        </div>
    )
}

export default About;