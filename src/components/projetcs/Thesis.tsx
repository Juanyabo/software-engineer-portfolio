import ProjectBase from "../ProjectBase";
import { config } from "../../data/details/Thesis";

function Thesis() {
    return (
        <ProjectBase
            {...config}
        />
    );
}

export default Thesis;
