import { Code, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HamburgerMenu from './hamburgerMenu.tsx';

const menuItems = [
    { title: "Sobre", href: "#about" },
    { title: "Tecnologias", href: "#stack" },
    { title: "Projetos", href: "#projects" },
    { title: "Contatos", href: "#contact" },
]

const resumeUrl = "/Currículo.pdf"
const githubUrl = "https://github.com/Viitorsoares"
const linkedinUrl = "https://linkedin.com/in/viitorsoares/"
const emailUrl = "mailto:viitorgab.soares@gmail.com"

export default function Header() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-background'>
            <nav className='w-full max-w-7xl mx-auto flex justify-between px-5 sm:px-8 lg:px-12 py-4 sm:py-5 items-center gap-6'>
                <div className='flex gap-2 text-lg sm:text-xl items-center'>
                    <Code className='text-main-green w-5 h-5 sm:w-6 sm:h-6' />
                    <h1 className='text-main-text'>vitors.dev</h1>
                </div>

                <div className='hidden md:flex items-center gap-6 lg:gap-8'>
                    <ul className='flex items-center gap-5 lg:gap-7'>
                        {menuItems.map((item) => (
                            <li key={item.title}>
                                <a
                                    href={item.href}
                                    className='text-sm lg:text-base text-main-text font-rubik hover:text-main-green transition-colors'
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-4'>
                        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='text-main-text w-5 h-5 hover:text-main-green transition-colors' />
                        </a>
                        <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='text-main-text w-5 h-5 hover:text-main-green transition-colors' />
                        </a>
                        <a href={emailUrl}>
                            <Mail className='text-main-text w-5 h-5 hover:text-main-green transition-colors' />
                        </a>
                    </div>

                    <a
                        href={resumeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='whitespace-nowrap border border-main-green text-main-green font-rubik text-sm px-4 py-2 rounded hover:bg-main-green hover:text-background transition-colors'
                    >
                        Baixar CV
                    </a>
                </div>

                <div className='md:hidden'>
                    <HamburgerMenu
                        items={menuItems}
                        resumeUrl={resumeUrl}
                        githubUrl={githubUrl}
                        linkedinUrl={linkedinUrl}
                        emailUrl={emailUrl}
                    />
                </div>
            </nav>
        </header>
    )
}
