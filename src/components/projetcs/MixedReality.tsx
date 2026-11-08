import ProjectBase from "../ProjectBase";
import "./MixedReality.css";
import { featuredProjects } from "../../data/projects";
import { contributions, config } from "../../data/details/mixedReality";

const mixedReality = featuredProjects.find(
    project => project.title === "Android XR Developer Catalyst Program"
);

function MixedReality() {
    if (!mixedReality) return null;

    return (
        <ProjectBase
            className="mixed-reality"
            title={mixedReality.title}
            meta={mixedReality.meta}
            description={mixedReality.description}
            media={{
                type: "image",
                src: mixedReality.image,
                alt: "Android XR mixed reality experience"
            }}
            sections={contributions}
            {...config}
        />
    );
}

export default MixedReality;