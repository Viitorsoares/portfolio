import { CardImageProject } from "./card_project"

type project = React.ComponentProps<typeof CardImageProject>

const projects: project[] = [
    {
        imageUrl: "/images/dashbord.jpg",
        name: "Vagaja — Encontre Vaga sem Rodar",
        description: "Conecta motoristas e agentes de zona azul em um mapa colaborativo de vagas disponíveis, otimizando a ocupação das ruas e facilitando a gestão do estacionamento urbano.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL",]
    },
    {
        imageUrl: "/images/dashbord.jpg",
        name: "Biblioteca — Sistema de Empréstimos de livros",
        description: "Sistema para controlar o acervo de livros da igreja: quem pegou emprestado, quando devolve, e o que está disponível. Dados salvos na nuvem, acessíveis de onde a secretaria ou biblioteca precisar.",
        tech: ["React", "JavaScript", "CSS", "Bootstrap", "Node.js", "Express", "MySQL"]
    },
]

export default function Project() {
    return (
        <section id="projects">
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