export default function Footer() {
    return (
        <footer className="p-5 text-left text-sm">
            <div className="text-secondary-text">
                <div className="flex flex-row gap-4">
                    &copy;
                    <p>2026</p>
                    <p>Vitor Soares</p>
                </div>

                <div>
                    <p className="flex flex-row gap-1.5">
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