import mapLocations from "../../assets/pictures/OnshindoOsaka/mapLocations.png"
import mapScan from "../../assets/gifs/OnshindoOsaka/mapScan.gif"
import interaction from "../../assets/gifs/OnshindoOsaka/interaction.gif"
import locationsInterface from "../../assets/pictures/OnshindoOsaka/locationsInterface.png"

export const config = {
    title: "Onshindo Osaka Spatial4",
    meta: "AR · Retail",
    description: "Onshindo Osaka Spatial4 is a multiplatform AR experience launched for the duration of a product marketing campaign across three locations in Zaragoza, Spain. It was developed by Spatial4 to create an interactive brand experience combining location-based technology with augmented reality.",
    contentTitle: "My Contributions",
    sections: [
        {
            title: "Location-Based AR & VPS Integration",
            rows: [
                {
                    media: [mapLocations],
                    descriptions: [
                        {
                            title: "GPS Triggers",
                            text: "Developed a GPS-based proximity detection system to identify nearby locations and select the corresponding Multiset VPS map using geospatial distance calculations."
                        }
                    ]
                },
                {
                    media: [mapScan],
                    descriptions: [
                        {
                            title: "Visual Localization",
                            text: "Integrated Multiset's Visual Positioning System (VPS) to perform visual localization using the selected map, activating the corresponding AR experience upon successful localization."
                        }
                    ]
                }
            ]
        },
        {
            title: "Interactive AR Experience",
            rows: [
                {
                    media: [interaction],
                    descriptions: [
                        {
                            title: "Touch Interaction",
                            text: "Implemented touch-based interactions using camera raycasting to detect user input on interactive 3D objects within the AR environment."
                        },
                        {
                            title: "Animation Sequencing",
                            text: "Coordinated interactive object animations using Unity Animator state machines, conditional triggers, and timed transitions to create a responsive AR experience."
                        }
                    ]
                }
            ]
        },
        {
            title: "User Guidance  & Mobile Experience",
            rows: [
                {
                    media: [locationsInterface],
                    descriptions: [
                        {
                            title: "Distance Guidance",
                            text: "Developed a location guidance interface displaying real-time distances to participating locations, helping users identify where the AR experience can be activated."
                        },
                        {
                            title: "UI & Permissions",
                            text: "Implemented location permission handling, localization feedback, and adaptive UI layouts for portrait and landscape orientations."
                        }
                    ]
                }
            ]
        },
        {
            title: "Cross-Platform Development & Deployment",
            rows: [
                {
                    media: [],
                    descriptions: [
                        {
                            title: "Android & iOS Builds",
                            text: "Developed the augmented reality application and built it for both mobile platforms."
                        },
                        {
                            title: "Store Publishing",
                            text: "Assisted with the application submission and publishing process through Google Play Console and App Store Connect."
                        }
                    ]
                }
            ]
        }
    ],
    technologies: [
        "Unity",
        "C#",
        "AR Foundation",
        "ARCore",
        "ARKit",
        "Multiset SDK"
    ],
    projectDetails: [
        {
            label: "Company",
            value: "Spatial4"
        },
        {
            label: "Genre",
            value: "Entertainment"
        },
        {
            label: "Platforms",
            value: "Android, iOS"
        }
    ]
};