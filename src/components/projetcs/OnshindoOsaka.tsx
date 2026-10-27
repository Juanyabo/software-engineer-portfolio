import ProjectBase from "../ProjectBase";
import { config } from "../../data/details/OnshindoOsaka";
import { featuredProjects } from "../../data/projects";
import "./OnshindoOsaka.css";

const project = featuredProjects.find(
    project => project.title === "Onshindo Osaka Spatial4"
);

function OnshindoOsaka() {
    return (
        <ProjectBase
            {...config}
            className="onshindo-osaka"
            media={project ? {
                type: "image",
                src: project.image,
                alt: "Onshindo Osaka Spatial4 augmented reality experience"
            } : undefined}
        />
    );
}

export default OnshindoOsaka;