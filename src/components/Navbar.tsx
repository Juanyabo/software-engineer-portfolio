import { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)
    const homeUrl = import.meta.env.BASE_URL;
    const navigateToSection = (
        event: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        if (window.location.pathname !== homeUrl) {
            sessionStorage.setItem("targetSection", id);
            return;
        }

        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <header className="navbar">
            <div className="container navbar-content">

                <Link className="brand navbar-brand" to="/">
                    Juan Gianella
                </Link>

                <nav className="text horizontal-menu navbar-links">
                    <a
                        className="hover-element"
                        href={`${homeUrl}#about`}
                        onClick={(event) => navigateToSection(event, "about")}
                    >
                        About
                    </a>

                    <a
                        className="hover-element"
                        href={`${homeUrl}#portfolio`}
                        onClick={(event) => navigateToSection(event, "portfolio")}
                    >
                        Portfolio
                    </a>
                </nav>

                <a
                    className="text navbar-contact"
                    href={`${homeUrl}#contact`}
                    onClick={(event) => navigateToSection(event, "contact")}
                >
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
                <a
                    className="hover-element"
                    href={`${homeUrl}#about`}
                    onClick={(event) => {
                        navigateToSection(event, "about");
                        closeMenu();
                    }}
                >
                    About
                </a>

                <a
                    className="hover-element"
                    href={`${homeUrl}#portfolio`}
                    onClick={(event) => {
                        navigateToSection(event, "portfolio");
                        closeMenu();
                    }}
                >
                    Portfolio
                </a>

                <a
                    className="hover-element"
                    href={`${homeUrl}#contact`}
                    onClick={(event) => {
                        navigateToSection(event, "contact");
                        closeMenu();
                    }}
                >
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Navbar