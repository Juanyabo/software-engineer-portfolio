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
}

function ProjectBase({
    title,
    meta,
    description,
    media,
    contentTitle = "My contributions",
    sections = []
}: ProjectBaseProps) {
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
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProjectBase;