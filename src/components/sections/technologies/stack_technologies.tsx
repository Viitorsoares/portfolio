"use client"
import { Badge } from "@/components/ui/badge";
import { useState } from "react"
import CardTechnologies from "./card_technologies";
import { techIconMap, technologies } from "@/data/tech-icons";

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
                    <CardTechnologies
                        key={tech.name}
                        name={tech.name}
                        category={tech.category}
                        iconUrl={techIconMap[tech.name] ?? ""}
                    />
                ))}
            </div>
        </section>
    )
}