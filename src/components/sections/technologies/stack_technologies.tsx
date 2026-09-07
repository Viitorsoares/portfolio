import { useState } from "react"

const technologies = [
    { name: "JavaScript", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "TypeScript", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "React", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/react-native.png" },
    { name: "Next.js", category: "Frontend", iconUrl: "https://img.icons8.com/ios-filled/50/nextjs.png" },
    { name: "CSS", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Tailwind CSS", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/tailwind_css.png" },
    { name: "Bootstrap", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Sass", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "HTML", category: "Frontend", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Node.js", category: "Backend", iconUrl: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "Python", category: "Backend", iconUrl: "https://img.icons8.com/color/48/golang.png" },
    { name: "PostgreSQL", category: "Backend", iconUrl: "https://img.icons8.com/color/48/postgreesql.png" },
    { name: "Express", category: "Backend", iconUrl: "https://img.icons8.com/color/48/redis.png" },
    { name: "Docker", category: "DevOps", iconUrl: "https://img.icons8.com/color/48/docker.png" },
    { name: "Git", category: "DevOps", iconUrl: "https://img.icons8.com/color/48/docker.png" },
    { name: "GitHub", category: "DevOps", iconUrl: "https://img.icons8.com/color/48/docker.png" },
    { name: "Postman", category: "DevOps", iconUrl: "https://img.icons8.com/color/48/docker.png" },
];

const filter = ["All", "Frontend", "Backend", "DevOps", "Tools"]

export default function StackTechnologies() {
    const [activeFilter, setActiveFilter] = useState("All")

    const filtered =
        activeFilter === "All"
            ? technologies
            : technologies.filter((t) => t.category === activeFilter)
    return (
        <></>
    )
}