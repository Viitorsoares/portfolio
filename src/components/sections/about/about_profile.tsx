import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { AboutProfileCard } from "./about_profile_card"

export default function AboutProfile() {
    return (
        <div>
            <span className="flex flex-row gap-2 text-main-green pb-6">01. <p>Sobre</p></span>
            <Card className="w-full flex flex-col gap-7 max-w-sm bg-cards">
                <CardHeader className="flex flex-col gap-5">
                    <h2 className="text-white text-[22px]">Um pouco sobre mim</h2>

                    <CardDescription className="text-main-text flex flex-col gap-4">
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

                <CardContent className="flex flex-col gap-3">
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
        </div>
    )
}
