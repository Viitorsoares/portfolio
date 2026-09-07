"use client"
import { Badge } from "@/components/ui/badge";
import { useState } from "react"
import CardTechnologies from "./card_technologies";

type Technology = React.ComponentProps<typeof CardTechnologies>

const technologies: Technology[] = [
    { name: "JavaScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Sass", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "HTML", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Node.js", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Express", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Docker", category: "DevOps", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", category: "Ferramentas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", category: "Ferramentas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", category: "Ferramentas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]

const filters = ["Todos", "Frontend", "Backend", "DevOps", "Ferramentas"]

export default function StackTechnologies() {
    const [activeFilter, setActiveFilter] = useState("All")

    const filtered =
        activeFilter === "Todos"
            ? technologies
            : technologies.filter((tech) => tech.category === activeFilter)
    return (
        <section>
            <span className="flex flex-row gap-2 text-main-green pb-5">02. <p>Habilidade técnicas</p></span>
            <h2 className="text-[22px] text-white">Tecnologias que utilizo</h2>

            <div className="flex flex-wrap gap-3 mb-8 mt-9">
                {filters.map((filter) => (
                    <Badge
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-4 rounded-full border text-sm bg-background text-main-text transition-color ${activeFilter === filter
                            ? "border-main-green text-main-green"
                            : "border-main-text text-main-text hover:border-gray-500"
                            } `}
                    >
                        {filter}
                    </Badge>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2.5">
                {filtered.map((tech) => (
                    <CardTechnologies key={tech.name} {...tech} />
                ))}
            </div>
        </section>
    )
}