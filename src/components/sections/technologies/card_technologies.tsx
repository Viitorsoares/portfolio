import Image from "next/image"

interface CardTechnologiesProps {
    iconUrl: string
    name: string
    category: "Frontend" | "Backend" | "DevOps" | "Ferramentas"
}

export default function CardTechnologies({
    iconUrl, 
    name, 
    category
}: CardTechnologiesProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl py-3.5 bg-cards ">
            <Image src={iconUrl} alt={name} width={33} height={33} className=""/>
            <span className="text-base text-main-text">{name}</span>
            <span className="text-xs px-3 py-1 rounded-full border text-main-green border-button-green">{category}</span>
        </div>
    )
}