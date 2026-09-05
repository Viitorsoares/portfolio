import { Button } from "@/components/ui/button";

interface ButtonHeroProps {
    title: string
    className?: string
}

export default function ButtonHero({ title, className }: ButtonHeroProps) {
    return (
        <Button className={className}>
            {title}
        </Button>
    )
}