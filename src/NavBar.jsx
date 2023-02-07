import { Link } from "react-router-dom"
import './styles/NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul className="menu">
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="link">About</Link>
                </li>
                <li>
                    <Link to="/projects" className="link">Projects</Link>
                </li>
                <li>
                    <Link to="/experience" className="link">Experience</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;