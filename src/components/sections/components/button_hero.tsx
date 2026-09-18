import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

interface ButtonHeroProps {
    title: string
    href?: string
    icon?: LucideIcon | IconType
    className?: string
}

export default function ButtonHero({ title, href, icon: Icon, className }: ButtonHeroProps) {
    const content = (
        <>
            {title}
            {Icon && <Icon className="ml-2 h-4 w-4 font-bold" strokeWidth={5} />}
        </>
    )

    if (href) {
        return (
            <Button render={<a href={href} />} nativeButton={false} className={className}>
                {content}
            </Button>
        )
    }

    return (
        <Button className={className}>
            {content}
        </Button>
    )
}