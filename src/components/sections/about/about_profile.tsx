"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { AboutProfileCard } from "./about_profile_card"
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use_in_view";

export default function AboutProfile() {
    const { ref, isVisible } = useInView<HTMLElement>();

    return (
        <section
            ref={ref}
            className={cn(
                "scroll-mt-28 transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            )}
        >
            <span className="flex flex-row gap-2 text-main-green text-sm sm:text-base pb-5 sm:pb-6">01. <p>Sobre</p></span>
            <Card className="w-full flex flex-col gap-6 sm:gap-7 bg-cards sm:[--card-spacing:--spacing(6)] lg:[--card-spacing:--spacing(8)]">
                <CardHeader className="flex flex-col gap-4 sm:gap-5">
                    <h2 className="text-white text-xl sm:text-22 lg:text-2xl">Um pouco sobre mim</h2>

                    <CardDescription className="text-main-text text-sm sm:text-base flex flex-col gap-4 lg:max-w-4xl">
                        <span>
                            Minha história na tecnologia é guiada por muita curiosidade
                            e pelo prazer de ver um sistema funcionando do zero.
                            Com 3 anos dedicados a estudar e colocar a mão na massa no
                            desenvolvimento Full-Stack, venho construindo uma base sólida
                            em arquitetura web, resolução de problemas e boas práticas de código.
                            Estou em um momento muito dinâmico da minha carreira, onde cada projeto
                            é uma oportunidade de absorver novos conhecimentos, aprimorar minhas habilidades
                            técnicas e colaborar ativamente com equipes que valorizam a inovação
                            e o crescimento mútuo.
                        </span>
                        <span>
                            Se há um problema complexo para resolver,
                            estou sempre pronto para pesquisar, testar e entregar a melhor solução.
                        </span>
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                    <AboutProfileCard

                        label={"Experiência"}
                        value={"3 anos"}
                    />
                    <AboutProfileCard
                        label={"Foco"}
                        value={"Full-Stack & Web"}
                    />
                    <AboutProfileCard
                        label={"Status"}
                        value={"Disponível para trabalho"}
                    />
                </CardContent>
            </Card>
        </section>
    )
}
