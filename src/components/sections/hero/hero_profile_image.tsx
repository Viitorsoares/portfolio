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
                    "card-sway relative my-3 mx-auto w-full max-w-57.5 sm:max-w-66 lg:max-w-75 xl:max-w-82.5 aspect-23/28 rounded-2xl p-0",
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
                        sizes="(max-width: 640px) 230px, (max-width: 1024px) 264px, 330px"
                        className="object-cover"
                        priority
                    />

                    {/* Gradiente inferior para legibilidade do texto */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* Nome + cargo — canto inferior esquerdo, sobre o gradiente */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 sm:bottom-4 sm:left-4 sm:right-4">
                        <h3 className="text-base lg:text-lg font-semibold leading-tight text-white">{name}</h3>
                        <p className="text-sm lg:text-base text-main-green">{role}</p>
                    </div>
                </div>

                {/* Badge "open to work" — canto superior direito */}
                {openToWork && (
                    <Badge
                        className={cn(
                            "absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex max-w-[calc(100%-1rem)] items-center gap-1.5",
                            "rounded-full border border-main-green bg-main-green/10 backdrop-blur-sm",
                            "px-2.5 py-2 text-[11px] sm:px-3 sm:text-xs font-medium text-main-text hover:bg-black/70"
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