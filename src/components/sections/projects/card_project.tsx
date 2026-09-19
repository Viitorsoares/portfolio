import { techIconMap } from "@/data/tech-icons"
import ButtonHero from "../components/button_hero"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

interface CardImageProjectProps {
    imageUrl: string
    name: string
    description: string
    tech: string[]
    githubUrl: string
    demoUrl: string
}

export function CardImageProject({
    imageUrl,
    name,
    description,
    tech,
    githubUrl,
    demoUrl
}: CardImageProjectProps) {
    return (
        <Card className="relative mx-auto flex h-full w-full max-w-sm flex-col pt-0 md:max-w-none bg-cards border-3 border-transparent hover:border-button-green hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageUrl}
                alt={name}
                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader className="flex grow flex-col gap-3">
                <CardTitle className="text-white text-base sm:text-lg text-balance">{name}</CardTitle>
                <CardDescription className="text-main-text text-sm font-light">{description}</CardDescription>
                <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-auto pt-3 mb-0.5">
                    {tech.map((t) => (
                        <div key={t}>
                            {techIconMap[t] && (
                                <img src={techIconMap[t]} alt={t} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                            )}
                        </div>
                    ))}
                </div>
            </CardHeader>
            <CardFooter className="mt-auto px-1.5 py-2 flex flex-row flex-wrap items-center gap-2 bg-cards border-t border-s-secondary-text/80" >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <ButtonHero icon={FaGithub} title={"Código"} className="text-sm bg-cards hover:bg-cards text-main-text cursor-pointer" />
                </Link>
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ButtonHero icon={FaExternalLinkAlt} title={"Demo"} className="text-sm bg-cards hover:bg-cards cursor-pointer text-main-green" />
                </Link>
            </CardFooter>
        </Card>
    )
}
