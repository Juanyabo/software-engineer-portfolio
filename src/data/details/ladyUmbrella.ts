import chapterMenu from "../../assets/gifs/ladyUmbrella/chapterMenu.gif";
import crosshair from "../../assets/gifs/ladyUmbrella/crosshair-gadgets-hitmarker.gif";
import grenadeOffScreen from "../../assets/gifs/ladyUmbrella/grenadeOffScreen.gif";
import grenadeOnScreen from "../../assets/gifs/ladyUmbrella/grenadeOnScreen.gif";
import mainMenu from "../../assets/gifs/ladyUmbrella/MainMenu.gif";
import pauseMenu from "../../assets/gifs/ladyUmbrella/pauseMenu.gif";
import skipAnimation from "../../assets/gifs/ladyUmbrella/skipAnimation.gif";
import umbrellaHealth from "../../assets/gifs/ladyUmbrella/umbrellaHealth.gif";
import desktopUI from "../../assets/pictures/ladyUmbrella/desktopUI.png";
import gamePadUI from "../../assets/pictures/ladyUmbrella/gamePadUI.png";
import shaderLoadingScreen from "../../assets/pictures/ladyUmbrella/shaderLoadingScreen.png";
import dynamicHUD from "../../assets/gifs/ladyUmbrella/dynamicHUD.gif";
import ammoIndicator from "../../assets/gifs/ladyUmbrella/AmmoIndicator.gif";

export const contributions = [
    {
        title: "HUD",
        rows: [
            {
                media: [dynamicHUD],
                descriptions: [
                    {
                        title: "Dynamic HUD",
                        text: "Developed a custom HUD system that manages widget creation and visibility through the game's controller, displaying relevant interface elements based on gameplay context."
                    }
                ]
            },
            {
                media: [grenadeOnScreen, grenadeOffScreen],
                descriptions: [
                    {
                        title: "Grenade Indicator",
                        text: "Implemented indicators that track enemy grenades, displaying their positions differently depending on whether they are inside or outside the player's screen."
                    }
                ]
            },
            {
                media: [crosshair],
                descriptions: [
                    {
                        title: "Crosshair",
                        text: "Created a dynamic crosshair that visualizes the umbrella's spread and range, changes color when targeting enemies or destructible objects, and animates to indicate when the weapon is ready to fire again."
                    },
                    {
                        title: "Hitmarkers",
                        text: "Added individual hitmarkers for each pellet that hits an enemy, turning red on a kill and white otherwise."
                    },
                    {
                        title: "Gadgets",
                        text: "Built UI indicators for unlocked gadgets, their current selection, and cooldown status."
                    }
                ]
            },
            {
                media: [ammoIndicator],
                descriptions: [
                    {
                        title: "Ammo Indicator",
                        text: "Programmed dynamically generated bullet icons and a numerical reserve ammo counter, including an animation that warns the player when ammunition is running low."
                    }
                ]
            },
            {
                media: [umbrellaHealth],
                descriptions: [
                    {
                        title: "Umbrella Shield",
                        text: "Developed a shader-based indicator that visually represents the umbrella shield’s remaining percentage and hides when it is full."
                    }
                ]
            },
            {
                media: [desktopUI, gamePadUI],
                descriptions: [
                    {
                        title: "Input Device Recognition",
                        text: "Implemented a system that detects the most recently used input device and dynamically updates the corresponding UI icons for keyboard, mouse, and controller."
                    }
                ]
            },
            {
                media: [skipAnimation],
                descriptions: [
                    {
                        title: "Skip Cinematic",
                        text: "Introduced a cinematic skip prompt that displays the appropriate input depending on the active device."
                    }
                ]
            }
        ]
    },
    {
        title: "Menus",
        rows: [
            {
                media: [chapterMenu],
                descriptions: [
                    {
                        title: "Chapter Selection",
                        text: "Developed a chapter selection menu that displays unlocked chapters with their images and descriptions, retrieves the selected chapter's index, and loads the corresponding level."
                    }
                ]
            },
            {
                media: [mainMenu],
                descriptions: [
                    {
                        title: "Main Menu",
                        text: "Created the initial main menu and an animated button system with Idle, Hovered, and Pressed states, establishing reusable navigation behavior for other menus."
                    }
                ]
            },
            {
                media: [pauseMenu],
                descriptions: [
                    {
                        title: "Pause Menu",
                        text: "Implemented the initial pause menu using a reusable menu class that manages button navigation and focus across mouse, keyboard, and controller input."
                    }
                ]
            }
        ]
    },
    {
        title: "Loading Screen",
        rows: [
            {
                media: [shaderLoadingScreen],
                descriptions: [
                    {
                        title: "Shader Compilation",
                        text: "Set up a loading screen using Unreal Engine's Bundled PSOs pipeline, collecting and packaging shader configurations to reduce runtime compilation and displaying compilation progress through a progress bar."
                    }
                ]
            }
        ]
    }
];

export const config = {
    media: {
        type: "youtube" as const,
        src: "https://www.youtube-nocookie.com/embed/X_DgUlOjEhE",
        title: "Lady Umbrella - Official Trailer"
    },

    contentTitle: "My contributions",

    technologiesTitle: "Tech Stack",
    technologies: [
        "Unreal Engine 5",
        "C++",
        "UMG",
        "Blueprints"
    ],

    repositoryTitle: "Repository",
    repository: {
        label: "GitHub",
        url: "https://github.com/Juanyabo/Lady-Umbrella"
    },

    projectDetailsTitle: "Project Details",
    projectDetails: [
        {
            label: "Studio",
            value: "Zulo Interactive"
        },
        {
            label: "Genre",
            value: "3D action-adventure shooter"
        },
        {
            label: "Platform",
            value: "Steam"
        }
    ]
};