import { techIconMap } from "@/data/tech-icons"
import ButtonHero from "../components/button_hero"
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface CardImageProjectProps {
    imageUrl: string
    name: string
    description: string
    tech: string[]
}

export function CardImageProject({
    imageUrl,
    name,
    description,
    tech
}: CardImageProjectProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 mt-9 bg-cards">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageUrl}
                alt={name}
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader className="flex flex-col gap-3">
                <CardTitle className="text-white">{name}</CardTitle>
                <CardDescription className="text-main-text text-sm font-light">{description}</CardDescription>
                <div className="flex flex-row flex-wrap gap-4 mt-3 mb-0.5">
                    {tech.map((t) => (
                        <div key={t}>
                            {techIconMap[t] && (
                                <img src={techIconMap[t]} alt={t} className="w-6 h-6" />
                            )}
                        </div>
                    ))}
                </div>
            </CardHeader>
            <CardFooter className="px-1.5 py-2 flex flex-row items-center gap-2 bg-cards border-t border-s-secondary-text/80" >
                <ButtonHero icon={FaGithub} title={"Código"} className="text-sm bg-cards text-main-text" />
                <ButtonHero icon={FaExternalLinkAlt} title={"Demo"} className="text-sm bg-cards text-main-green" />
            </CardFooter>
        </Card>
    )
}
