import Navbar from "./Navbar";
import "./ProjectBase.css";

type ProjectMedia =
    | { type: "youtube"; src: string; title: string }
    | { type: "video"; src: string }
    | { type: "image"; src: string; alt: string };

type RowMedia =
    | string
    | { type: "video"; src: string };

interface ProjectSection {
    title: string;
    rows: {
        media: RowMedia[];
        descriptions: {
            title: string;
            text: string;
        }[];
    }[];
}

interface ProjectBaseProps {
    title: string;
    meta: string;
    description: string;
    media?: ProjectMedia;
    contentTitle?: string;
    sections?: ProjectSection[];

    technologies?: string[];
    technologiesTitle?: string;

    repository?: {
        label: string;
        url: string;
    };
    repositoryTitle?: string;

    projectDetails?: {
        label: string;
        value: string;
    }[];
    projectDetailsTitle?: string;
}

function ProjectBase({
    title,
    meta,
    description,
    media,
    contentTitle = "My contributions",
    sections = [],
    technologies = [],
    technologiesTitle = "Tech Stack",
    repository,
    repositoryTitle = "Repository",
    projectDetails = [],
    projectDetailsTitle = "Project Details"
}: ProjectBaseProps) {

    const visibleTechnologies = technologies.filter(
        technology => technology.trim()
    );

    const visibleDetails = projectDetails.filter(
        detail => detail.label.trim() && detail.value.trim()
    );

    const hasRepository = Boolean(repository?.url.trim());
    const hasLeftColumn = visibleTechnologies.length > 0 || hasRepository;
    const hasRightColumn = visibleDetails.length > 0;
    const hasInformation = hasLeftColumn || hasRightColumn;

    return (
        <>
            <Navbar />

            <main className="project-base">
                <div className="container">

                    <div className="project-breadcrumb">
                        <a
                            className="text hover-element"
                            href={import.meta.env.BASE_URL}
                            onClick={() => sessionStorage.setItem("targetSection", "portfolio")}
                        >
                            Work
                        </a>

                        <p className="text">
                            / <span className="project-breadcrumb-name">{title}</span>
                        </p>
                    </div>

                    <div className="project-intro">
                        <p className="text portfolio-meta">
                            {meta}
                        </p>

                        <h1>{title}</h1>

                        <p className="text portfolio-description">
                            {description}
                        </p>

                        {media && (
                            <div className="project-media">
                                {media.type === "youtube" && (
                                    <iframe
                                        src={media.src}
                                        title={media.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                )}

                                {media.type === "video" && (
                                    <video controls playsInline>
                                        <source src={media.src} type="video/mp4" />
                                        Your browser does not support video.
                                    </video>
                                )}

                                {media.type === "image" && (
                                    <img src={media.src} alt={media.alt} />
                                )}
                            </div>
                        )}

                        {sections.length > 0 && (
                            <>
                                <h1 className="project-contributions-title">
                                    {contentTitle}
                                </h1>

                                <div className="project-contributions">
                                    {sections.map((section, sectionIndex) => (
                                        <section
                                            className="project-section"
                                            key={sectionIndex}
                                        >
                                            <p className="text portfolio-meta">
                                                {section.title}
                                            </p>

                                            <div className="project-section-media">
                                                {section.rows.map((row, rowIndex) => (
                                                    <div
                                                        className="project-item"
                                                        key={rowIndex}
                                                    >
                                                        <div
                                                            className="project-row"
                                                            style={{
                                                                gridTemplateColumns: `repeat(${Math.max(2, row.media.length)}, minmax(0, 1fr))`
                                                            }}
                                                        >
                                                            {row.media.map((item, mediaIndex) => (
                                                                typeof item === "string" ? (
                                                                    <img
                                                                        key={mediaIndex}
                                                                        src={item}
                                                                        alt={section.title}
                                                                        loading="lazy"
                                                                    />
                                                                ) : (
                                                                    <video
                                                                        key={mediaIndex}
                                                                        src={item.src}
                                                                        controls
                                                                        playsInline
                                                                        preload="metadata"
                                                                    />
                                                                )
                                                            ))}
                                                        </div>

                                                        <div className="project-descriptions">
                                                            {row.descriptions.map((item, descriptionIndex) => (
                                                                <p
                                                                    className="text portfolio-description project-description"
                                                                    key={descriptionIndex}
                                                                >
                                                                    <strong>{item.title}:</strong> {item.text}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </>
                        )}

                        {(sections.length > 0 || hasInformation) && (
                            <div className="divider project-bottom-divider"></div>
                        )}

                        {hasInformation && (
                            <div className="project-information">

                                {hasLeftColumn && (
                                    <div className="project-information-column">

                                        {visibleTechnologies.length > 0 && (
                                            <div className="project-information-group">
                                                <p className="text eyebrow">
                                                    {technologiesTitle}
                                                </p>

                                                <div className="project-technologies">
                                                    {visibleTechnologies.map((technology) => (
                                                        <span
                                                            className="text project-technology"
                                                            key={technology}
                                                        >
                                                            {technology}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {hasRepository && repository && (
                                            <div className="project-information-group">
                                                <p className="text eyebrow">
                                                    {repositoryTitle}
                                                </p>

                                                <a
                                                    className="text project-repository"
                                                    href={repository.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {repository.label}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {hasRightColumn && (
                                    <div className="project-information-column">
                                        <p className="text eyebrow">
                                            {projectDetailsTitle}
                                        </p>

                                        <div className="project-details">
                                            {visibleDetails.map((detail) => (
                                                <div
                                                    className="project-detail"
                                                    key={detail.label}
                                                >
                                                    <span className="text">
                                                        {detail.label}:
                                                    </span>

                                                    <span className="text">
                                                        {detail.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <a
                            className="text hover-element project-back-link"
                            href={import.meta.env.BASE_URL}
                            onClick={() => sessionStorage.setItem("targetSection", "portfolio")}
                        >
                            <span aria-hidden="true">←</span>
                            <span>Back to all work</span>
                        </a>

                    </div>
                </div>
            </main>
        </>
    );
}

export default ProjectBase;