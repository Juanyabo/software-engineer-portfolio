import "./Portfolio.css";

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
        </section>
    );
}

export default Portfolio;