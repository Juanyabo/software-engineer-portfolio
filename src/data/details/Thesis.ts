import structureCreation from "../../assets/gifs/thesis/structureCreation.gif"
import structureEditing from "../../assets/gifs/thesis/structureEditing.gif";
import mechanisms from "../../assets/gifs/thesis/mechanisms.gif"
import excelimportExport from "../../assets/gifs/thesis/exceIimportExport.gif"

export const config = {
    title: "2D Structural Stability Analysis",

    meta: "Engineering",

    contentTitle: "Technical Breakdown",

    sections: [
        {
            title: "Interactive Structure Modeling",
            rows: [
                {
                    media: [structureCreation],
                    descriptions: [
                        {
                            title: "Structure Creation",
                            text: "Built an interactive desktop interface for creating 2D truss structures by defining nodes, coordinates, support conditions, and connecting bars."
                        }
                    ]
                },
                {
                    media: [structureEditing],
                    descriptions: [
                        {
                            title: "Structure Editing",
                            text: "Added tools for modifying existing nodes and bars, allowing users to adjust structural configurations without rebuilding them from scratch."
                        }
                    ]
                }
            ]
        },
        {
            title: "Geometric Stability Analysis",
            rows: [
                {
                    media: [],
                    descriptions: [
                        {
                            title: "Matrix Assembly",
                            text: "Coded the mathematical procedures required to assemble the equilibrium matrix of a 2D truss structure and obtain its corresponding kinematic matrix."
                        },
                        {
                            title: "Stability Detection",
                            text: "Automated the stability analysis using the null space of the kinematic matrix, determining whether a structure is geometrically stable or contains independent instability mechanisms. Results were cross-checked against hand calculations by a structural engineer."
                        }
                    ]
                }
            ]
        },
        {
            title: "Instability Mechanism Visualization",
            rows: [
                {
                    media: [mechanisms],
                    descriptions: [
                        {
                            title: "Mechanism Visualization",
                            text: "Created graphical representations of structural instability mechanisms, allowing users to compare the original structure with its corresponding deformation."
                        },
                        {
                            title: "Mechanism Navigation",
                            text: "Added navigation controls for exploring multiple independent instability mechanisms detected within the same structure."
                        }
                    ]
                }
            ]
        },
        {
            title: "Excel Import & Export",
            rows: [
                {
                    media: [excelimportExport],
                    descriptions: [
                        {
                            title: "Data Import",
                            text: "Enabled Excel file importing to reconstruct previously defined structures, including node coordinates, support conditions, and bar connections."
                        },
                        {
                            title: "Data Export",
                            text: "Added Excel file exporting to preserve structural configurations for future analysis and reuse."
                        }
                    ]
                }
            ]
        }
    ],

    description:
        "Software for Geometric Stability Analysis of 2D Bar Structures (2D Structural Stability Analysis) is a desktop application developed as my Systems Engineering bachelor's thesis at Universidad Privada de Santa Cruz de la Sierra (UPSA). It was designed to overcome the limitations of traditional stability checks by automating the geometric stability analysis of 2D truss structures, identifying structural instabilities and visualizing their mechanisms.",
    technologiesTitle: "Tech Stack",
    technologies: [
        "Python",
        "Tkinter",
        "Matplotlib",
        "Pandas",
        "NumPy"
    ],

    projectDetailsTitle: "Project Details",
    projectDetails: [
        { label: "University", value: "UPSA" },
        { label: "Degree", value: "Systems Engineering" },
        { label: "Grade", value: "95/100" },
        { label: "Defended", value: "July 2024" } 
    ]
};