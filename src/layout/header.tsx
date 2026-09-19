import { Code } from 'lucide-react';
import HamburgerMenu from './hamburgerMenu.tsx';

const menuItems = [
    { title: "Sobre", href: "#about" },
    { title: "Tecnologias", href: "#stack" },
    { title: "Projetos", href: "#projects" },
    { title: "Contatos", href: "#contact" },
]

export default function Header() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-background'>
            <nav className='flex justify-between px-5 py-5 items-center'>
                <div className='flex gap-2 text-xl items-center'>
                    <Code className='text-main-green w-6 h-6' />
                    <h1 className='text-main-text'>vitors.dev</h1>
                </div>

                <HamburgerMenu
                    items={menuItems}
                    resumeUrl="/resume.pdf"
                    githubUrl="https://github.com/Viitorsoares"
                    linkedinUrl="https://linkedin.com/in/viitorsoares/"
                    emailUrl="mailto:viitorgab.soares@gmail.com"
                />
            </nav>
        </header>
    )
}