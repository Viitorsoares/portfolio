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
            <span className="flex flex-row gap-2 text-main-green pb-6">01. <h3>Sobre</h3></span>
            <Card className="w-full flex flex-col gap-7 max-w-sm bg-cards">
                <CardHeader className="flex flex-col gap-5">
                    <h2 className="text-white text-[22px]">Um pouco sobre mim</h2>

                    <CardDescription className="text-main-text">
                        I'm a full-stack engineer with 7+ years building production systems — from fintech APIs processing millions of transactions to real-time collaboration tools used by When I'm not coding I'm contributing to open source, writing about distributed systems, or brewing specialty coffee.
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
