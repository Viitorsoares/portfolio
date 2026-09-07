import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
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
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageUrl}
                alt={name}

                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    {description}
                    {tech}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}
