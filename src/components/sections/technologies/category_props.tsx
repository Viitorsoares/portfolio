import { Badge } from "@/components/ui/badge"

type TechnologiesProps = {
    category: string
}

export default function CategoryProps({ category }: TechnologiesProps) {
    return (
        <div>
            <Badge className="p-4 bg-background border-2 border-cards">{category}</Badge>
        </div>
    )
}