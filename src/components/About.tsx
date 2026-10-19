import { useEffect, useRef, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faSteam, faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Spatial4Logo from "../assets/spatial4logo.png";
import ZuloLogo from "../assets/zuloLogo.png";
import TDSLogo from "../assets/TDSLogo.png";

const words = [
    "Software Development",
    "XR Development",
    "Game Development",
    "Web Development",
];

function About() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentWord.length) {
                    setText(currentWord.slice(0, text.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (text.length > 0) {
                    setText(currentWord.slice(0, text.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, text === currentWord && !isDeleting ? 1500 : isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeline = timelineRef.current;

        if (!timeline) return;

        const items = timeline.querySelectorAll(".about-timeline-item");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about">
            <div className="container about-section about-intro">
                <p className="eyebrow">Who am I</p>

                <div className="about-content">
                    <div className="about-content-left">
                        <h1 className="heading-xl">
                            Hi, I'm <span className="text-cyan">Juan Gianella</span>
                        </h1>

                        <h1 className="about-intro-work">
                            I do
                            <span className="about-typewriter">
                                {text}
                                <span className="typewriter-cursor" aria-hidden="true" />
                            </span>
                        </h1>

                        <p className="description">
                            I'm a software engineer with a master's degree in Advanced Video Game Programming. Through my studies and professional work, I've learned to pick up new technologies quickly, work through unfamiliar problems, and break down complex systems before implementing them. I've always been curious about how things work under the hood, and I enjoy applying that knowledge to the projects I work on.
                        </p>

                        <div className="divider"></div>

                        <div className="about-highlights">
                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faTrophy} />
                                </div>
                                <span className="description about-highlight-number">1</span>
                                <span className="description about-highlight-text">
                                    Award
                                </span>
                            </div>

                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faSteam} />
                                </div>
                                <span className="description about-highlight-number">1</span>
                                <span className="description about-highlight-text">
                                    Game released
                                </span>
                            </div>

                            <div className="about-highlight">
                                <div className="about-highlight-icons">
                                    <FontAwesomeIcon icon={faAppStore} />
                                    <FontAwesomeIcon icon={faGooglePlay} />
                                    <FontAwesomeIcon icon={faGlasses} />
                                </div>
                                <span className="description about-highlight-number">2</span>
                                <span className="description about-highlight-text">
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
                <p className="eyebrow about-backstory-title">My Backstory</p>

                <div className="about-timeline" ref={timelineRef}>
                    {/* First job - Left */}
                    <div className="about-timeline-item">
                        <div className="about-timeline-content">
                            <h1 className="about-intro-work">XR Developer</h1>
                            <p className="description">None</p>
                            <ul className="description about-job-list">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>

                        <a
                            className="about-timeline-marker"
                            href="https://www.linkedin.com/company/spatial4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Spatial4 on LinkedIn"
                        >
                            <img src={Spatial4Logo} alt="Spatial4 logo" />
                        </a>
                    </div>

                    {/* Second job - Right */}
                    <div className="about-timeline-item">
                        <div className="about-timeline-content">
                            <h1 className="about-intro-work">AR Developer</h1>
                            <p className="description">Unity | C#</p>
                            <ul className="description about-job-list">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>

                        <a
                            className="about-timeline-marker"
                            href="https://www.linkedin.com/company/spatial4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Spatial4 on LinkedIn"
                        >
                            <img src={Spatial4Logo} alt="Spatial4 logo" />
                        </a>
                    </div>

                    {/* Third job - Right */}
                    <div className="about-timeline-item">
                        <div className="about-timeline-content">
                            <h1 className="about-intro-work">Gameplay & UI Programmer</h1>
                            <p className="description">Unity | C#</p>
                            <ul className="description about-job-list">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>

                        <a
                            className="about-timeline-marker"
                            href="https://www.linkedin.com/company/zulo-interactive/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Zulo Interactive on LinkedIn"
                        >
                            <img src={ZuloLogo} alt="Zulo logo" />
                        </a>
                    </div>

                    {/* Fourth job - Right */}
                    <div className="about-timeline-item">
                        <div className="about-timeline-content">
                            <h1 className="about-intro-work">Frontend Developer</h1>
                            <p className="description">Unity | C#</p>
                            <ul className="description about-job-list">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>

                        <a
                            className="about-timeline-marker"
                            href="https://www.linkedin.com/company/transformaci%C3%B3n-digital-santa-cruz-tdscz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Transformation Digital Santa Cruz on LinkedIn"
                        >
                            <img src={TDSLogo} alt="TDS logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;