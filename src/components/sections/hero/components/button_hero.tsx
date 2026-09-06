import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";

interface ButtonHeroProps {
    title: string
    icon?: LucideIcon
    className?: string
}

export default function ButtonHero({ title, icon: Icon, className }: ButtonHeroProps) {
    return (
        <Button className={className}>
            {title}
            {Icon && <Icon className="ml-2 h-4 w-4 font-bold" strokeWidth={3.5} />}
        </Button>
    )
}