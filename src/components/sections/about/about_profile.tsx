import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AboutProfileCard } from "./about_profile_card"


export default function AboutProfile() {
    return (
        <Card className="w-full max-w-sm bg-cards">
            <CardHeader>
                <CardTitle className="text-white">Um pouco sobre mim</CardTitle>

                <CardDescription className="text-main-text">
                    I'm a full-stack engineer with 7+ years building production systems — from fintech APIs processing millions of transactions to real-time collaboration tools used by When I'm not coding I'm contributing to open source, writing about distributed systems, or brewing specialty coffee.
                </CardDescription>
            </CardHeader>

            <CardContent>
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
                    value={"3 Disponível para trabalho"}
                />
            </CardContent>
        </Card>
    )
}
