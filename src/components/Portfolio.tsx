import "./Portfolio.css";
import ladyUmbrellaImage from "../assets/ladyUmbrella.png";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">
                <p className="eyebrow">My Work</p>
            </div>
            
            <div className="container">
                <div className="portfolio-project">
                    <div className="portfolio-project-media">
                        <h1 className="portfolio-heading">
                            Driven by challenges, engineering ideas into reality
                        </h1>
                        <div className="portfolio-details">
                            <p className="portfolio-description">
                                From contributing to an award-winning game to building XR applications,
                                I’ve worked across technologies to turn ideas into software that reaches users.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio-project-content">
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="portfolio-project">
                    <div className="portfolio-project-media">
                        <img className="portfolio-project-image" src={ladyUmbrellaImage} alt="Lady Umbrella" />
                    </div>
                    <div className="portfolio-project-content">
                    <p className="portfolio-meta">
                        Gameplay & UI Programming · VIDEO GAME
                    </p>
                    <h1 className="portfolio-project-heading">
                        Lady Umbrella
                    </h1>
                    <p className="portfolio-description">
                        Lady Umbrella is an award-winning 3D action-adventure game available on Steam. It was developed by Zulo Interactive as a capstone project for U-tad's Master's program.
                        <br /><br />
                        A game by Zulo Interactive · U-tad
                    </p>
                    <a href="/portfolio/lady-umbrella" className="portfolio-project-link">
                        Explore my work <span className="portfolio-project-arrow">→</span>
                    </a>
                </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;