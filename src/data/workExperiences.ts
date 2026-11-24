import Spatial4Logo from "../assets/Spatial4Logo.png";
import ZuloLogo from "../assets/ZuloLogo.png";
import TDSLogo from "../assets/TDSLogo.png";

export const workExperiences = [
    {
        title: "Mixed Reality Developer",
        date: "Aug 2026 – Oct 2026",
        technologies: "Unity | C# | Android XR | Android XR Extensions | OpenXR | XR Interaction Toolkit | XR Hands",
        description: [
            "Developed an interactive mixed reality application in Unity and C# for XREAL AURA wired XR glasses, working with the hardware before its public release as part of the Android XR Developer Catalyst Program.",
            "Implemented hand tracking interactions using XR Hands and the XR Interaction Toolkit, including gesture-based grabbing, one- and two-handed movement and rotation, and fingertip poke input to trigger animations and interface buttons.",
            "Built a step-based guided experience that places content within the user’s view and unlocks each interaction only after the previous one is completed, keeping object animations and on-screen instructions synchronized with progress.",
            "Created an information panel with automatic and manual topic navigation and fade transitions, editable directly in the Unity editor without code changes.",
            "Optimized performance on mixed reality hardware with foveated rendering and late latching, and met the requirements to publish the app on the Google Play Store for Android XR."
        ],
        logo: Spatial4Logo,
        link: "https://www.linkedin.com/company/spatial4/",
        company: "Spatial4"
    },
    {
        title: "Augmented Reality Developer",
        date: "Jan 2026 – May 2026",
        technologies: "Unity | C# | AR Foundation | ARCore | ARKit | MultiSet SDK",
        description: [
            "Developed and deployed a cross platform augmented reality application for iOS and Android, publishing the application on the App Store and Google Play.",
            "Implemented a location based activation system using GPS and VPS technologies, enabling AR experiences to be triggered at specific real world locations during a marketing campaign.",
            "Developed interactive AR functionality, including touch interactions and animation sequencing, creating engaging user experiences that responded to user input.",
            "Collaborated with artists and project stakeholders to implement and refine AR features according to project requirements and campaign objectives."
        ],
        logo: Spatial4Logo,
        link: "https://www.linkedin.com/company/spatial4/",
        company: "Spatial4"
    },
    {
        title: "Gameplay & UI Programmer",
        date: "Jan 2025 – Oct 2025",
        technologies: "Unreal Engine | C++ | UMG | Blueprints",
        description: [
            "Implemented the HUD architecture, including widgets and associated logic to display in-game information and player interactions.",
            "Built input device recognition for keyboard, mouse, and gamepad, dynamically updating the UI based on the active input device.",
            "Developed the main menu, pause menu, and a chapter selection menu integrated with the save system, focusing on usability and gameplay flow.",
            "Maintained a clean, scalable codebase to ensure systems remained easy to extend and maintain across the team."
        ],
        logo: ZuloLogo,
        link: "https://www.linkedin.com/company/zulo-interactive/",
        company: "Zulo Interactive"
    },
    {
        title: "Frontend Developer Intern",
        date: "May 2023 – Jul 2023",
        technologies: "Flutter | Dart",
        description: [
            "Diagnosed and resolved integration issues between backend and frontend systems across multiple screens of a web application, improving consistency and team productivity."
        ],
        logo: TDSLogo,
        link: "https://www.linkedin.com/company/transformaci%C3%B3n-digital-santa-cruz-tdscz/",
        company: "Transformación Digital Santa Cruz"
    }
];
