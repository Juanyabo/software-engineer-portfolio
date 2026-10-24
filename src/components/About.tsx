import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faSteam, faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { useTypewriter } from "../hooks/useTypewriter";
/*import heroImage from "../assets/Hero.png"*/
import { useTimelineReveal } from "../hooks/useTimelineReveal";
import { workExperiences } from "../data/workExperiences";
import type { CSSProperties } from "react";
import { skills, skillCategories, type Skill } from "../data/skills";
import { useCardTilt } from "../hooks/useCardTilt";
import { useSkillsReveal } from "../hooks/useSkillsReveal";

function SkillCard({ name, logo, border, background }: Skill) {
    const { rotation, handleMouseMove, handleMouseLeave } = useCardTilt();

    return (
        <div className="skill-card-wrapper">
            <div
                className="skill-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    "--card-border": border,
                    "--card-background": background,
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                } as CSSProperties}
            >
                <div className="skill-card-inner">
                    <img src={logo} alt={name} />
                    <p className="text skill-card-name">{name}</p>
                </div>
            </div>
        </div>
    );
}

function About() {
    const text = useTypewriter();
    const timelineRef = useTimelineReveal();
    const skillsRef = useSkillsReveal();

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
                        {/* <img src={heroImage} alt="Profile" className="about-profile-image" /> */}
                    </div>
                </div>
            </div>

            
            <div className="container about-section">
                <p className="text eyebrow about-backstory-title">
                    My Backstory
                </p>

                <div className="about-timeline" ref={timelineRef}>
                    {workExperiences.map((work) => (
                        <div className="about-timeline-item" key={work.title}>
                            <div className="about-timeline-content">
                                <h5>
                                    {work.title}
                                </h5>

                                <p className="text skills">
                                    {work.technologies}
                                </p>

                                <ul className="text details">
                                    {work.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <p className="text about-timeline-date-mobile">
                                    {work.date}
                                </p>
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

            <div className="container about-section">
                <p className="text eyebrow about-Skills-title">
                    My Skills
                </p>

                <div className="skill-categories" ref={skillsRef}>
                    {skillCategories.map((category) => (
                        <div className="skill-category" key={category}>
                            <h4 className="skill-category-title">
                                {category}
                            </h4>

                            <div className="skill-cards">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill, index) => (
                                        <div
                                            className="skill-card-reveal"
                                            key={skill.name}
                                            style={{ "--card-index": index } as CSSProperties}
                                        >
                                            <SkillCard {...skill} />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;