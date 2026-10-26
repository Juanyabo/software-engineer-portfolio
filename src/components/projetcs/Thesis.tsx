import ProjectBase from "../ProjectBase";
import thesisCover from "../../assets/pictures/thesis/thesis-cover.png.png"
import { config } from "../../data/details/Thesis";

function Thesis() {
    return (
        <ProjectBase
            {...config}
            media={{
                type: "image",
                src: thesisCover,
                alt: "Structural instability analysis showing a deformation mechanism"
            }}
        />
    );
}

export default Thesis;
