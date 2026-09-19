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
        <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl px-2 py-3.5 sm:px-3 sm:py-4 bg-cards border border-transparent transition-all duration-300 ease-in-out hover:border-button-green hover:-translate-y-2 hover:shadow-xl">
            <Image src={iconUrl} alt={name} width={33} height={33} className="h-8 w-8 sm:h-8.25 sm:w-8.25 object-contain" />
            <span className="text-sm sm:text-base text-main-text text-center leading-tight">{name}</span>
            <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full border text-main-green border-button-green whitespace-nowrap">{category}</span>
        </div>
    )
}