const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full mt-20 sm:mt-24 lg:mt-28 bg-cards ">
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-7 lg:py-8 font-rubik text-xs sm:text-sm text-secondary-text flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="flex flex-row items-center gap-1.5 whitespace-nowrap">
                    <span>&copy;</span>
                    <span>{year}</span>
                    <span className="text-main-text">Vitor Soares</span>
                </p>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <span className="whitespace-nowrap">Construído com</span>
                    <ul className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1.5">
                        {techStack.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-button-green/40 px-2 py-0.5 text-main-green whitespace-nowrap"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
