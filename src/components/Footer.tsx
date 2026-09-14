import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-contact">
                <a className="footer-contact-item" href="https://www.google.com/maps/search/madrid%2C%2BEspa%C3%B1a/?hl=es" rel="noopener noreferrer">   
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="footer-contact-icon"
                    />
                    <p>Madrid, Spain</p>
                </a>
        
                <a className="footer-contact-item" href="mailto:juan.gianella13@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="footer-contact-icon"
                    />
                    <p>juan.gianella13@gmail.com</p>
                </a>
            </div>
            <div className="footer-brand-nav">
                <p className="footer-brand">Juan Gianella Blanco</p>

                <nav className="eyebrow footer-navigation">
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="https://www.linkedin.com/in/juan-gianella" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/Juanyabo" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                </nav>
            </div>
            <div className="eyebrow footer-bottom">
                <p>© 2026 Juan Gianella Blanco. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer