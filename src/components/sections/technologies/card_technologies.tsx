import { Card } from "@/components/ui/card"
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
        <Card>
            <Image src={iconUrl} alt={name} />
            <span className="text-base">{name}</span>
            <span className="text-xs px-3 py-1 rounded-full border border-button-green">{category}</span>
        </Card>
    )
}