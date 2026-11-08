
export const contributions = [
    {
        title: "Hand Tracking & Object Manipulation",
        rows: [
            {
                media: [],
                descriptions: [
                    {
                        title: "Hand-based interaction",
                        text: "Implemented gesture-driven grabbing where closing the hand picks up an object and opening it releases it. Objects can be moved and rotated freely in any direction using one or both hands."
                    }
                ]
            },
            {
                media: [],
                descriptions: [
                    {
                        title: "Poke interaction",
                        text: "Added fingertip poke interaction to trigger actions on touch, from starting animations to pressing interface buttons. Interactable objects can be enabled and configured at runtime, including physics-based grabbing, as the experience progresses."
                    }
                ]
            }
        ]
    },
    {
        title: "Guided Experience Flow",
        rows: [
            {
                media: [],
                descriptions: [
                    {
                        title: "Content placement",
                        text: "Developed a system that positions content in front of the user based on their view, so the experience always starts within reach and in sight."
                    }
                ]
            },
            {
                media: [],
                descriptions: [
                    {
                        title: "Interaction sequence",
                        text: "Built a step-based interaction system that unlocks new interactions only once the previous step is completed, regardless of the number of elements involved. Object animations and on-screen instructions are synchronized with the user's progress, guiding them through the experience and preventing actions from happening out of order."
                    }
                ]
            }
        ]
    },
    {
        title: "Dynamic Information Panel",
        rows: [
            {
                media: [],
                descriptions: [
                    {
                        title: "Auto-cycling content",
                        text: "Created an information panel that cycles through its topics on its own, using smooth fade transitions between them."
                    }
                ]
            },
            {
                media: [],
                descriptions: [
                    {
                        title: "Manual navigation",
                        text: "Users can choose any topic at any time, and the panel switches to it with the same smooth transition. Buttons give visual feedback by highlighting the active topic and underlining on hover, and a built-in button links to the online store."
                    }
                ]
            },
            {
                media: [],
                descriptions: [
                    {
                        title: "Editable content",
                        text: "Designed the panel so its content can be edited and previewed directly in the editor, without changing any code."
                    }
                ]
            }
        ]
    },
    {
        title: "Performance Optimization & Store Readiness",
        rows: [
            {
                media: [],
                descriptions: [
                    {
                        title: "Rendering optimization",
                        text: "Implemented foveated rendering and late latching to keep the experience smooth and efficient on mixed reality hardware."
                    }
                ]
            },
            {
                media: [],
                descriptions: [
                    {
                        title: "Store readiness",
                        text: "Met the requirements to publish the app on the Google Play Store for Android XR."
                    }
                ]
            }
        ]
    }
];

export const config = {
    contentTitle: "My contributions",

    technologiesTitle: "Tech Stack",
    technologies: [
        "Unity",
        "C#",
        "Android XR",
        "Android XR Extensions",
        "OpenXR",
        "XR Interaction Toolkit",
        "XR Hands",
    ]
};
