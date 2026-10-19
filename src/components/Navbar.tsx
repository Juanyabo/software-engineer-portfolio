import './Navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-content">
                <a className="brand navbar-brand" href="#">
                    Juan Gianella
                </a>

                <nav className="text horizontal-menu">
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
            </div>
        </header>
    )
}

export default Navbar