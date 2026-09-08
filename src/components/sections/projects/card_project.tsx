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
        <Card className="relative mx-auto w-full max-w-sm pt-0 mt-9 bg-cards">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageUrl}
                alt={name}

                className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader className="flex flex-col gap-3">
                <CardTitle className="text-white">{name}</CardTitle>
                <CardDescription className="text-main-text font-light">{description}</CardDescription>
                <div className="flex flex-row flex-wrap gap-1.5 mt-1">
                    {tech.map((t) => (
                        <Badge
                            key={t}
                            variant={"outline"}
                            className="border border-button-green text-backgound-green bg-main-green/8 rounded text-xs font-normal"
                        >
                            {t}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}
