import type { ReactNode } from "react";
import Navbar from "./Navbar";
import "./ProjectBase.css";

type ProjectMedia =
    | { type: "youtube"; src: string; title: string }
    | { type: "video"; src: string }
    | { type: "image"; src: string; alt: string };

interface ProjectBaseProps {
    title: string;
    meta: string;
    description: string;
    media?: ProjectMedia;
    children?: ReactNode;
}

function ProjectBase({
    title,
    meta,
    description,
    media,
    children
}: ProjectBaseProps) {
    return (
        <>
            <Navbar />

            <main className="project-base">
                <div className="container">

                    <div className="project-breadcrumb">
                        <a
                            className="text hover-element"
                            href={`${import.meta.env.BASE_URL}#portfolio`}
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

                        <h1 className="project-contributions-title">
                            My contributions
                        </h1>

                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProjectBase;