import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Zap } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileImageProps {
    name: string
    role: string
    yearsExp: number
    imageUrl: string
    openToWork?: boolean
    className?: string
}

export default function HeroProfileImage({
    name,
    role,
    yearsExp,
    imageUrl,
    openToWork = true,
    className
}: ProfileImageProps) {
    return (
        <>
            {/* Animação de balanço lento — roda continuamente, com ou sem hover */}
            <style>{`
                @keyframes card-sway {
                    0%   { transform: rotate(-2deg); }
                    50%  { transform: rotate(2deg); }
                    100% { transform: rotate(-2deg); }
                }
                .card-sway {
                    animation: card-sway 6s ease-in-out infinite;
                    transform-origin: 50% 100%;
                    will-change: transform;
                }
            `}</style>

            <Card
                className={cn(
                    "card-sway relative mt-3 mb-3 mx-4 w-[230px] h-[280px] rounded-2xl p-0",
                    " shadow-none bg-transparent",
                    className
                )}
            >
                {/* Clipped image container — mantém os cantos arredondados
                    sem cortar os badges que sobrepõem as bordas de propósito */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-main-green">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Gradiente inferior para legibilidade do texto */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* Nome + cargo — canto inferior esquerdo, sobre o gradiente */}
                    <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-base font-semibold leading-tight text-white">{name}</h3>
                        <p className="text-sm text-main-green">{role}</p>
                    </div>
                </div>

                {/* Badge "open to work" — canto superior direito */}
                {openToWork && (
                    <Badge
                        className={cn(
                            "absolute top-3 right-3 z-20 flex items-center gap-1.5",
                            "rounded-full border border-main-green bg-main-green/10 backdrop-blur-sm",
                            "px-3 py-2 text-xs font-medium text-main-text hover:bg-black/70"
                        )}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-button-green opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        disponível para trabalhar
                    </Badge>
                )}
            </Card>
        </>
    )
}