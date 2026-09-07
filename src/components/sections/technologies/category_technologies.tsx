import { Badge } from "@/components/ui/badge"

type CategoryTechnologiesProps = {
    category: string
}

export default function CategoryTechnologies({ category }: CategoryTechnologiesProps) {
    return (
        <div>
            <Badge className="p-4 bg-background border-2 border-cards">{category}</Badge>
        </div>
    )
}