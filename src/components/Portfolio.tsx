import "./Portfolio.css";
import googleDeveloperImage from "../assets/androidXRDeveloper.png";
import onshindoOsakaImage from "../assets/onshindoOsaka.png";
import ladyUmbrellaImage from "../assets/ladyUmbrella.png";

const featuredProjects = [
    {
        title: "Android XR Program",
        meta: "XR · Retail",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident ullam libero iusto aliquam veritatis.",
        credits: "",
        image: googleDeveloperImage,
        link: "/portfolio/android-xr-program"
    },
    {
        title: "Onshindo Osaka Spatial4",
        meta: "AR · Retail",
        description: "Onshindo Osaka Spatial4 is a multiplatform AR experience launched for the duration of a product marketing campaign across three locations in Zaragoza, Spain. It was developed by Spatial4 to create an interactive brand experience combining location-based technology with augmented reality.",
        credits: "A mobile app by Spatial4 · Onshindo Osaka",
        image: onshindoOsakaImage,
        link: "/portfolio/onshindo-osaka-spatial4"
    },
    {
        title: "Lady Umbrella",
        meta: "Gameplay & UI Programming · Video Game",
        description: "Lady Umbrella is an award-winning 3D action-adventure game available on Steam. It was developed by Zulo Interactive as a capstone project for U-tad's Master's program.",
        credits: "A game by Zulo Interactive · U-tad",
        image: ladyUmbrellaImage,
        link: "/portfolio/lady-umbrella"
    }
];

const personalProjects = [
    {
        name: "RPG Mechanics",
        focus: "Video Game",
        technologies: ["Unreal Engine 5", "GAS", "UMG" ,"C++", "Blueprints"]
    },
    {
        name: "Untilted",
        focus: "XR",
        technologies: ["Unity", "C#", "Java"]
    },
    {
        name: "Portfolio",
        focus: "Web",
        technologies: ["React", "TypeScript", "HTML" ,"CSS", "ESLint"]
    }
];

const academicProjects = [
    {
        name: "Talent Tree",
        focus: "UI",
        technologies: ["Unreal Engine 5", "UMG", "C++", "Blueprints"]
    },
    {
        name: "Physics Sandbox",
        focus: "Physics",
        technologies: ["Unreal Engine 5", "Chaos Physics", "UMG" ,"C++", "Blueprints"]
    },
    {
        name: "Thesis",
        focus: "Engineering",
        technologies: ["Python", "Tkinter" , "Matplotlib", "Pandas", "NumPy"]
    }
];

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <p className="eyebrow">My Work</p>
            </div>
            
            <div className="container">
                <div className="portfolio-project portfolio-intro">
                    <div className="portfolio-project-media">
                        <h1 className="portfolio-intro-heading">
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
                    <div className="portfolio-project-content">
                        <p className="portfolio-meta">
                            {project.meta}
                        </p>

                        <h1 className="portfolio-project-heading">
                            {project.title}
                        </h1>

                        <p className="portfolio-description">
                            {project.description}
                            <br /><br />
                            {project.credits}
                        </p>

                        <a href={project.link} className="portfolio-project-link hover-element">
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
                    <p className="eyebrow">{category.title}</p>
                    <div className="divider"></div>

                    <div className="portfolio-table">
                        <div className="portfolio-table-header eyebrow">
                            <span>Name</span>
                            <span>Focus</span>
                            <span>Technologies</span>
                        </div>

                        {category.projects.map((project) => (
                            <div className="portfolio-table-row" key={project.name}>
                                <span className="portfolio-table-name">
                                    {project.name}
                                </span>

                                <span className="portfolio-table-focus">
                                    {project.focus}
                                </span>

                                <span className="portfolio-table-technologies">
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