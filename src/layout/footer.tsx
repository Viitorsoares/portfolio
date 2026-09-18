export default function Footer() {
    return (
        <footer className="p-5 mt-20 text-left text-sm font-mono bg-cards">
            <div className="text-secondary-text flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                    &copy;
                    <p>2026</p>
                    <p>Vitor Soares</p>
                </div>

                <div>
                    <p className="flex flex-row flex-wrap  gap-1.5">
                        Construido com
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>Tailwind CSS</span>
                        <span>Shadcn/ui</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}