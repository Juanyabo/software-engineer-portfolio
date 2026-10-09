import './Navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-content">
                <a className="brand navbar-brand" href="#">
                    Juan Gianella Blanco
                </a>

                <nav className="eyebrow navigation navbar-navigation">
                    <a className="hover-element" href="#about">
                        About
                    </a>
                    <a className="hover-element" href="#portfolio">
                        Portfolio
                    </a>
                </nav>

                <a className="eyebrow navbar-contact" href="#contact">
                    Contact
                </a>
            </div>
        </header>
    )
}

export default Navbar