import { Link } from "react-router-dom"
import '../../styles/NavBar.css'

const NavBar = () => {
    return (
        <header>
            <button className="nav__toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/projects" className="link">Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/experience" className="link">Experience</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;