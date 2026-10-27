import cameraSwitching from "../../assets/gifs/RPGMechanics/cameraSwitching.gif"
import characterMovement from "../../assets/gifs/RPGMechanics/characterMovement.gif"
import enemyDetection from "../../assets/gifs/RPGMechanics/enemyDetection.gif"
import inventoryCategories from "../../assets/gifs/RPGMechanics/inventoryCategories.gif"
import inventoryDrop from "../../assets/gifs/RPGMechanics/inventoryDrop.gif"
import itemCollection from "../../assets/gifs/RPGMechanics/itemCollection.gif"
import objectInteraction from "../../assets/gifs/RPGMechanics/objectInteraction.gif"
import itemPreview from "../../assets/gifs/RPGMechanics/itemPreview.gif"
import gas from "../../assets/pictures/RPGMechanics/gas.png"

export const Data = {
    title: "RPG Mechanics",
    meta: "Video Game",
    description: "RPGMechanics is an ongoing personal Unreal Engine 5 project inspired by some of my favorite RPGs. I’m building the foundations of an RPG in C++ using the Gameplay Ability System plugin, with the goal of growing it, system by system, into a full game.",
    contentTitle: "Development Progress",
    sections: [
        {
            title: "Character & Camera System",
            rows: [
                {
                    media: [cameraSwitching, characterMovement],
                    descriptions: [
                        {
                            title: "Character & Camera System",
                            text: "A character and camera system built on Unreal Engine's Enhanced Input framework. It supports switching between first-person and third-person perspectives, adjustable camera distances, and character movement with animation-aware camera handling."
                        }
                    ]
                }
            ]
        },
        {
            title: "Gameplay Ability System",
            rows: [
                {
                    media: [gas],
                    descriptions: [
                        {
                            title: "Gameplay Ability System",
                            text: "Unreal Engine's Gameplay Ability System (GAS) is integrated into the character architecture, establishing a foundation for RPG attributes and future abilities. A custom AttributeSet defines Endurance and Fatigue along with their maximum values, and the system is connected to the player HUD."
                        }
                    ]
                }
            ]
        },
        {
            title: "Interaction System",
            rows: [
                {
                    media: [enemyDetection, objectInteraction],
                    descriptions: [
                        {
                            title: "Interaction System",
                            text: "This reusable interaction system uses camera-based raycasting to detect characters and interactable objects. It updates contextual HUD information through delegates, validates interaction distances, and responds to physics-driven object movement to keep detected targets up to date."
                        }
                    ]
                }
            ]
        },
        {
            title: "Inventory & Item System",
            rows: [
                {
                    media: [itemCollection, inventoryDrop],
                    descriptions: [
                        {
                            title: "Inventory & Item System",
                            text: "A component-based inventory system supporting item collection, stacking, alphabetical organization, and dropping items back into the world. Items retain their associated data and physical representations, while event-driven delegates keep the inventory interface synchronized with gameplay changes."
                        }
                    ]
                }
            ]
        },
        {
            title: "Inventory UI & Item Preview",
            rows: [
                {
                    media: [inventoryCategories, itemPreview],
                    descriptions: [
                        {
                            title: "Inventory UI & Item Preview",
                            text: "The interactive inventory interface features category-based filtering, keyboard and mouse navigation, dynamically updated item lists, and contextual item details. It also includes a rotatable 3D item preview using SceneCapture2D, with on-demand scene captures to reduce unnecessary rendering."
                        }
                    ]
                }
            ]
        }
    ],
    technologies: [
        "Unreal Engine 5",
        "GAS",
        "UMG",
        "C++",
        "Blueprints"
    ]
};