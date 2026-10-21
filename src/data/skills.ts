import unrealEngineLogo from "../assets/skills/unrealEngine.png"
import unityLogo from "../assets/skills/unity.png"
import cPlusPlusLogo from "../assets/skills/cPlusPlus.png"
import cSharpLogo from "../assets/skills/cSharp.png"
import pythonLogo from "../assets/skills/python.png"
import javaScriptLogo from "../assets/skills/javaScript.png"
import typeScriptLogo from "../assets/skills/typeScript.png"
import javaLogo from "../assets/skills/java.png"
import dartLogo from "../assets/skills/dart.png"
import reactLogo from "../assets/skills/react.png"
import nodeJSLogo from "../assets/skills/NodeJs.png"
import htmlLogo from "../assets/skills/html.png"
import cssLogo from "../assets/skills/css.png"
import flutterLogo from "../assets/skills/flutter.png"
import aspNetLogo from "../assets/skills/aspNet.png"
import microsoftSQLLogo from "../assets/skills/microsoftSQLServer.png"
import mongoDBLogo from "../assets/skills/MongoDB.png"
import firebaseLogo from "../assets/skills/firebase.png"
import linuxLogo from "../assets/skills/linux.png"
import azureLogo from "../assets/skills/azure.png"
import dockerLogo from "../assets/skills/docker.png"

export interface Skill {
    name: string;
    logo: string;
    border: string;
    background: string;
}

export const skills: Skill[] = [
    {
        name: "Unreal Engine",
        logo: unrealEngineLogo,
        border: "linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 50%, #404040 100%)",
        background: "#0A0A0A"
    },
    {
        name: "Unity",
        logo: unityLogo,
        border: "linear-gradient(180deg, #D8DDE0 0%, #555E66 100%)",
        background: "#34383B"
    },
    {
        name: "C++",
        logo: cPlusPlusLogo,
        border: "linear-gradient(180deg, #0086D1 0%, #00549B 100%)",
        background: "#102B46"
    },
    {
        name: "C#",
        logo: cSharpLogo,
        border: "linear-gradient(180deg, #A65BA8 0%, #62226E 100%)",
        background: "#2A1638"
    },
    {
        name: "Python",
        logo: pythonLogo,
        border: "linear-gradient(180deg, #3776AB 0%, #FFD343 100%)",
        background: "#17263A"
    },
    {
        name: "JavaScript",
        logo: javaScriptLogo,
        border: "linear-gradient(180deg, #F7DF1E 0%, #B88A00 100%)",
        background: "#302A13"
    },
    {
        name: "TypeScript",
        logo: typeScriptLogo,
        border: "linear-gradient(180deg, #3178C6 0%, #174A80 100%)",
        background: "#142B43"
    },
    {
        name: "Java",
        logo: javaLogo,
        border: "linear-gradient(180deg, #F89820 0%, #317A9B 100%)",
        background: "#1C2026"
    },
    {
        name: "Dart",
        logo: dartLogo,
        border: "linear-gradient(180deg, #40C4FF 0%, #01579B 100%)",
        background: "#102638"
    },
    {
        name: "React",
        logo: reactLogo,
        border: "linear-gradient(180deg, #61DAFB 0%, #087EA4 100%)",
        background: "#10232D"
    },
    {
        name: "Node.js",
        logo: nodeJSLogo,
        border: "linear-gradient(180deg, #68B447 0%, #247A38 100%)",
        background: "#14291D"
    },
    {
        name: "HTML",
        logo: htmlLogo,
        border: "linear-gradient(180deg, #F16529 0%, #B53616 100%)",
        background: "#2B1B17"
    },
    {
        name: "CSS",
        logo: cssLogo,
        border: "linear-gradient(180deg, #2965F1 0%, #1745A8 100%)",
        background: "#142341"
    },
    {
        name: "Flutter",
        logo: flutterLogo,
        border: "linear-gradient(180deg, #54C5F8 0%, #0868A8 100%)",
        background: "#102B3B"
    },
    {
        name: "ASP.net",
        logo: aspNetLogo,
        border: "linear-gradient(180deg, #42B8F4 0%, #0756A5 100%)",
        background: "#101E30"
    },
    {
        name: "Microsft SQL Server",
        logo: microsoftSQLLogo,
        border: "linear-gradient(180deg, #28B6F6 0%, #1765A0 100%)",
        background: "#101D30"
    },
    {
        name: "MongoDB",
        logo: mongoDBLogo,
        border: "linear-gradient(180deg, #4DB33D 0%, #237A35 100%)",
        background: "#14271B"
    },
    {
        name: "Firebase",
        logo: firebaseLogo,
        border: "linear-gradient(180deg, #FFCA28 0%, #F57C00 100%)",
        background: "#2B2113"
    },
    {
        name: "Linux",
        logo: linuxLogo,
        border: "linear-gradient(180deg, #F5C542 0%, #64748B 100%)",
        background: "#303B49"
    },
    {
        name: "Azure",
        logo: azureLogo,
        border: "linear-gradient(180deg, #35C2F4 0%, #0067B8 100%)",
        background: "#10243A"
    },
    {
        name: "Docker",
        logo: dockerLogo,
        border: "linear-gradient(180deg, #2496ED 0%, #145DA0 100%)",
        background: "#102338"
    }
];