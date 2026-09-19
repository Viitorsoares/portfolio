"use client"

import { Badge } from "@/components/ui/badge";
import { useState } from "react"
import CardTechnologies from "./card_technologies";
import { techIconMap, technologies } from "@/data/tech-icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use_in_view";

const filters = ["Todos", "Frontend", "Backend", "DevOps", "Ferramentas"]

export default function StackTechnologies() {
    const [activeFilter, setActiveFilter] = useState("Todos")
    const { ref, isVisible } = useInView<HTMLElement>();

    const filtered =
        activeFilter === "Todos"
            ? technologies
            : technologies.filter((tech) => tech.category === activeFilter)
    return (
        <section
            id="stack"
            ref={ref}
            className={cn(
                "scroll-mt-28 transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            )}
        >
            <span className="flex flex-row gap-2 text-main-green text-sm sm:text-base pb-4 sm:pb-5">02. <p>Habilidade técnicas</p></span>
            <h2 className="text-xl sm:text-22 lg:text-2xl text-white">Tecnologias que utilizo</h2>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 mt-6 sm:mt-9">
                {filters.map((filter) => (
                    <Badge
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3 py-3 sm:px-4 sm:py-4 rounded-full border text-xs sm:text-sm bg-background text-main-text transition-color cursor-pointer ${activeFilter === filter
                            ? "border-main-green text-main-green"
                            : "border-main-text text-main-text hover:border-gray-500"
                            } `}
                    >
                        {filter}
                    </Badge>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
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