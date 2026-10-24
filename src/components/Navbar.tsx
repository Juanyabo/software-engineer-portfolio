import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="navbar">
            <div className="container navbar-content">

                <a className="brand navbar-brand" href="#">
                    Juan Gianella
                </a>

                <nav className="text horizontal-menu navbar-links">
                    <a className="hover-element" href="#about">
                        About
                    </a>
                    <a className="hover-element" href="#portfolio">
                        Portfolio
                    </a>
                </nav>

                <a className="text navbar-contact" href="#contact">
                    Contact
                </a>

                <button
                    className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-mobile-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav
                id="navbar-mobile-menu"
                className={`container text horizontal-menu navbar-mobile-menu ${menuOpen ? 'open' : ''}`}
                aria-label="Mobile navigation"
                inert={!menuOpen}
            >
                <a className="hover-element" href="#about" onClick={closeMenu}>
                    About
                </a>
                <a className="hover-element" href="#portfolio" onClick={closeMenu}>
                    Portfolio
                </a>
                <a className="hover-element" href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Navbar