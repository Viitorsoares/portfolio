import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Circle } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileCardProps {
    name: string
    role: string
    yearsExp: number
    imageUrl: string
    openToWork?: boolean
    className?: string
}

export default function ProfileCard({
    name,
    role,
    yearsExp,
    imageUrl,
    openToWork = true,
    className
}: ProfileCardProps) {
    return (
        <Card className={cn("relative w-[230px] h-[280px] rounded-2x1 p-0 shadow-2xl ", className)}>
            <Card className="absolute -left-5 -top-3 z-20 border bg-background px-3 py-1 text-main-text shadow-lg backdrop-blur-sm">{yearsExp} anos exp</Card>

            {openToWork && (
                <Badge >
                    <Circle className="h-2 w-2 text-main-green" />
                    <p>disponivel para trabalho</p>
                </Badge>
            )}

            <div className="">
                <Image
                    src={imageUrl}
                    alt={name} 
                    fill
                    className="h-full w-full object-cover"
                />       
            </div>

            <div>
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </Card>
    )
}

