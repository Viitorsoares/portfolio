import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

interface ButtonHeroProps {
    title: string
    href?: string
    icon?: LucideIcon | IconType
    className?: string
    download?: string
    target?: string
    rel?: string
}

export default function ButtonHero({ 
    title, 
    href, 
    icon: Icon, 
    className,
    download,
    target,
    rel
 }: ButtonHeroProps) {
    const content = (
        <>
            {title}
            {Icon && <Icon className="ml-2 h-4 w-4 font-bold" strokeWidth={5} />}
        </>
    )

    if (href) {
        return (
            <Button 
                render={<a href={href} download={download} target={target} rel={rel} />} 
                nativeButton={false} 
                className={className}
            >
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