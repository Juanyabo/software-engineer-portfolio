import type { ReactNode } from "react";
import Navbar from "./Navbar";
import "./ProjectBase.css";

interface ProjectBaseProps {
    children: ReactNode;
}

function ProjectBase({ children }: ProjectBaseProps) {
    return (
        <>
            <Navbar />

            <main className="project-base">
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    );
}

export default ProjectBase;