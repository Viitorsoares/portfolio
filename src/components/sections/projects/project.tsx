import { CardImageProject } from "./card_project"

type project = React.ComponentProps<typeof CardImageProject>

const projects: project[] = [
    {
        imageUrl: "/images/dashbord.jpg",
        name: "Beacon — Uptime Monitor",
        description: "Distributed uptime monitoring with multi-region checks, incident timelines, and Slack/PagerDuty alerting. Handles 40M+ pings per day.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL",]
    },
    {
        imageUrl: "/images/dashbord.jpg",
        name: "Beacon — Uptime Monitor",
        description: "Distributed uptime monitoring with multi-region checks, incident timelines, and Slack/PagerDuty alerting. Handles 40M+ pings per day.",
        tech: ["React", "JavaScript", "CSS", "Bootstrap", "Node.js", "Express", "MySQL"]
    },
]

export default function Project() {
    return (
        <section>
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