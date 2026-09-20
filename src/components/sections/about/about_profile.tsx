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
                            Minha trajetória na tecnologia é movida pela curiosidade e pelo entusiasmo de transformar ideias em sistemas funcionais desde o zero. Há 3 anos venho estudando e colocando em prática o desenvolvimento Full-Stack, construindo uma base sólida em desenvolvimento web, resolução de problemas e boas práticas de programação. Atualmente, estou em uma fase de constante evolução profissional, na qual cada projeto representa uma oportunidade de aprender, aprimorar minhas habilidades técnicas e contribuir de forma ativa com equipes que valorizam inovação, colaboração e crescimento.
                        </span>
                        <span>
                            Estou finalizando minha formação em Análise e Desenvolvimento de Sistemas e também já concluí cursos na área, como a Formação Full-Stack JavaScript da OneBitCode. Tenho perfil curioso e gosto de enfrentar desafios que exigem pesquisa, testes e aprendizado contínuo. Quando surge um problema complexo, meu objetivo é entender suas causas, buscar diferentes abordagens e desenvolver uma solução eficiente e bem estruturada.
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
