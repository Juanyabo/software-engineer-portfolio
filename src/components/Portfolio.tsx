import "./Portfolio.css";
import {featuredProjects, personalProjects, academicProjects} from "../data/projects";

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <p className="text eyebrow">My Work</p>
            </div>
            
            <div className="container">
                <div className="portfolio-project">
                    <div className="portfolio-project-media">
                        <h1>
                            Driven by challenges, engineering ideas into reality
                        </h1>
                        <div>
                            <p className="text portfolio-description">
                                From contributing to an award-winning game to building XR applications,
                                I’ve worked across technologies to turn ideas into software that reaches users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {featuredProjects.map((project, index) => {
                const media = (
                    <div className="portfolio-project-media">
                        <img
                            className="portfolio-project-image"
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                );

                const content = (
                    <div>
                        <p className="text portfolio-meta">
                            {project.meta}
                        </p>

                        <h2>
                            {project.title}
                        </h2>

                        <p className="text portfolio-description">
                            {project.description}
                            <br /><br />
                            {project.credits}
                        </p>

                        <a href={project.link} className="text portfolio-project-link hover-element">
                            Learn more <span className="portfolio-project-arrow">→</span>
                        </a>
                    </div>
                );

                return (
                    <div className="container" key={project.title}>
                        <div className="portfolio-project">
                            {index % 2 === 0 ? (
                                <>
                                    {media}
                                    {content}
                                </>
                            ) : (
                                <>
                                    {content}
                                    {media}
                                </>
                            )}
                        </div>
                    </div>
                );
            })}

            {[
                { title: "Personal Projects", projects: personalProjects },
                { title: "Academic Projects", projects: academicProjects }
            ].map((category) => (
                <div className="container portfolio-project-category" key={category.title}>
                    <p className="text eyebrow">{category.title}</p>
                    <div className="divider"></div>

                    <div>
                        <div className="portfolio-table-header text eyebrow portfolio-title-name divider">
                            <span>Name</span>
                            <span>Focus</span>
                            <span>Technologies</span>
                        </div>

                        {category.projects.map((project) => (
                            <div className="portfolio-table-row divider" key={project.name}>
                                <span className="text portfolio-table-name">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.name}
                                        </a>
                                    ) : (
                                        project.name
                                    )}
                                </span>

                                <span className="text portfolio-table-focus">
                                    {project.focus}
                                </span>

                                <span className="text">
                                    {project.technologies.join(" · ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </section>
    );
}

export default Portfolio;