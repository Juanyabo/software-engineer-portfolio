import ProjectBase from "../ProjectBase";
import { featuredProjects } from "../../data/projects";

const ladyUmbrella = featuredProjects.find(
    project => project.title === "Lady Umbrella"
);

function LadyUmbrella() {
    if (!ladyUmbrella) return null;

    return (
        <ProjectBase
            title={ladyUmbrella.title}
            meta={ladyUmbrella.meta}
            description={ladyUmbrella.description}
            media={{
                type: "youtube",
                src: "https://www.youtube-nocookie.com/embed/X_DgUlOjEhE",
                title: "Lady Umbrella - Official Trailer"
            }}
        >
            {/* Contributions */}
        </ProjectBase>
    );
}

export default LadyUmbrella;