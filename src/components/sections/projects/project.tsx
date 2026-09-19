"use client";

import { useInView } from "@/hooks/use_in_view";
import { CardImageProject } from "./card_project"
import { cn } from "@/lib/utils";

type project = React.ComponentProps<typeof CardImageProject>

const projects: project[] = [
    {
        imageUrl: "/images/vagaja.jpg",
        name: "Vagaja — Encontre Vaga sem Rodar",
        description: "Conecta motoristas e agentes de zona azul em um mapa colaborativo de vagas disponíveis, otimizando a ocupação das ruas e facilitando a gestão do estacionamento urbano.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        githubUrl: "https://github.com/Viitorsoares/vagaja",
        demoUrl: "/"
    },
    {
        imageUrl: "/images/dashbord.jpg",
        name: "Biblioteca — Sistema de Empréstimos de livros",
        description: "Sistema para controlar o acervo de livros da igreja: quem pegou emprestado, quando devolve, e o que está disponível. Dados salvos na nuvem, acessíveis de onde a secretaria ou biblioteca precisar.",
        tech: ["React", "JavaScript", "CSS", "Bootstrap", "Node.js", "Express", "MySQL"],
        githubUrl: "https://github.com/taina-s-lima/biblioteca-comunitaria",
        demoUrl: "/"
    },
]

export default function Project() {
    const { ref, isVisible } = useInView<HTMLElement>();

    return (
        <section 
            id="projects"
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            )}
        >
            <div>
                <span className="flex flex-row gap-2 text-main-green pb-5">03. <p>Projetos</p></span>
                <h2 className="text-[22px] text-white">Soluções em destaque</h2>
            </div>

            <div className="grid grid-cols-1">
                {projects.map((project, index) => (
                    <CardImageProject key={index} {...project} />
                ))}
            </div>
        </section>
    )
}