import ProjectBase from "../ProjectBase";
import { featuredProjects } from "../../data/projects";
import { contributions, config } from "../../data/details/ladyUmbrella"

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
            sections={contributions}
            {...config}
        />
    );
}

export default LadyUmbrella;