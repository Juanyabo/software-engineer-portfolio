import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const navigateToSection = (
        event: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

  return (
    <footer id="contact" className="footer">
        <div className="container">
            <div className="footer-contact">
                <a className="footer-contact-item" href="https://www.google.com/maps/search/madrid%2C%2BEspa%C3%B1a/?hl=es" rel="noopener noreferrer">   
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="footer-contact-icon"
                    />
                    <p className="text">Madrid, Spain</p>
                </a>
        
                <a className="footer-contact-item" href="mailto:juan.gianella13@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="footer-contact-icon"
                    />
                    <p className="text">juan.gianella13@gmail.com</p>
                </a>
            </div>
            <div className="footer-brand-nav divider">
                <p className="brand footer-brand">Juan Gianella</p>

                <nav className="text eyebrow horizontal-menu footer-navigation">
                    <a
                        className="hover-element"
                        href="#about"
                        onClick={(event) => navigateToSection(event, "about")}
                    >
                        About
                    </a>

                    <a
                        className="hover-element"
                        href="#portfolio"
                        onClick={(event) => navigateToSection(event, "portfolio")}
                    >
                        Portfolio
                    </a>
                    <a className="hover-element" href="https://www.linkedin.com/in/juan-gianella" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a className="hover-element" href="https://github.com/Juanyabo" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </nav>
            </div>
            <div className="text eyebrow footer-bottom">
                <p>© 2026 Juan Gianella. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer