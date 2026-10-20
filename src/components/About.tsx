import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faSteam, faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { useTypewriter } from "../hooks/useTypewriter";
import { useTimelineReveal } from "../hooks/useTimelineReveal";
import { workExperiences } from "../data/workExperiences";

function About() {
    const text = useTypewriter();
    const timelineRef = useTimelineReveal();

    return (
        <section id="about" className="about">
            <div className="container about-section">
                <p className="text eyebrow">Who am I</p>

                <div className="about-content">
                    <div className="about-content-left">
                        <h1>
                            Hi, I'm <span className="highlight">Juan Gianella</span>
                        </h1>

                        <h3>
                            I do
                            <span className="about-typewriter">
                                {text}
                                <span className="typewriter-cursor" aria-hidden="true" />
                            </span>
                        </h3>

                        <p className="text overview">
                            I'm a software engineer with a master's degree in Advanced Video Game Programming. Through my studies and professional work, I've learned to pick up new technologies quickly, work through unfamiliar problems, and break down complex systems before implementing them. I've always been curious about how things work under the hood, and I enjoy applying that knowledge to the projects I work on.
                        </p>

                        <div className="divider"></div>

                        <div className="about-highlights">
                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faTrophy} />
                                </div>
                                <span className="text about-highlight-text">1</span>
                                <span className="text about-highlight-text">
                                    Award
                                </span>
                            </div>

                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faSteam} />
                                </div>
                                <span className="text about-highlight-text">1</span>
                                <span className="text about-highlight-text">
                                    Game released
                                </span>
                            </div>

                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faAppStore} />
                                    <FontAwesomeIcon icon={faGooglePlay} />
                                    <FontAwesomeIcon icon={faGlasses} />
                                </div>
                                <span className="text about-highlight-text">2</span>
                                <span className="text about-highlight-text">
                                    Apps released
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content-right">
                        {/* Profile image */}
                    </div>
                </div>
            </div>

            
            <div className="container about-section about-backstory">
                <p className="text eyebrow about-backstory-title">
                    My Backstory
                </p>

                <div className="about-timeline" ref={timelineRef}>
                    {workExperiences.map((work) => (
                        <div className="about-timeline-item" key={work.title}>
                            <div className="about-timeline-content">
                                <h4>
                                    {work.title}
                                </h4>

                                <p className="text skills">
                                    {work.technologies}
                                </p>

                                <ul className="text details">
                                    {work.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                className="about-timeline-marker"
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${work.company} on LinkedIn`}
                            >
                                <img
                                    src={work.logo}
                                    alt={`${work.company} logo`}
                                />
                            </a>
                            <p className="text about-timeline-date">
                                {work.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;