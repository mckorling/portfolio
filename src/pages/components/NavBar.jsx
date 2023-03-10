import { Link } from "react-router-dom"
import { useState } from "react"
import '../../styles/NavBar.css'

const NavBar = () => {
    const [showNavToggle, setToggle] = useState(false);
    const setNavToggle = () => {
        setToggle(!showNavToggle);
    }

    return (
        <header className={showNavToggle ? "section__nav open" : "section__nav"}>
            <button className="nav__toggle" aria-label="toggle navigation" onClick={() => setNavToggle()}>
                <span className="hamburger"></span>
            </button>
            <nav className={showNavToggle ? "nav nav__toggle--show" : "nav nav__toggle--close"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/about" className="link" onClick={() => setNavToggle()}>About Me</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/projects" className="link" onClick={() => setNavToggle()}>Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/experience" className="link" onClick={() => setNavToggle()}>Experience</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;