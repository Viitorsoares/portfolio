'use client'

import { Code, Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

type MenuItem = {
    title: string
    href: string
}

type HamburgerMenuProps = {
    items: MenuItem[]
    resumeUrl?: string
    githubUrl?: string
    linkedinUrl?: string
    emailUrl?: string
}

export default function HamburgerMenu({
    items,
    resumeUrl = "#",
    githubUrl = "#",
    linkedinUrl = "#",
    emailUrl = "#"
}: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Menu
                onClick={() => setIsOpen(true)}
                aria-label='Abrir menu'
                className='text-main-text cursor-pointer w-6 h-6'
            />

            {isOpen && (
                <div
                    className='fixed inset-0 bg-black/60 z-40'
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`fixed top-0 right-0 h-full w-full max-w-full sm:max-w-sm overflow-y-auto overscroll-contain bg-background border-l border-main-text/20 z-50 flex flex-col justify-between transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div>
                    <div className='flex items-center justify-between px-5 pt-5 pb-6 border-b border-main-text/20'>
                        <div className='flex items-center gap-1 text-main-green'>
                            <Code className='w-5 h-5' />
                            <span className='font-rubik text-sm'>vitors.dev</span>
                        </div>
                        <X
                            onClick={() => setIsOpen(false)}
                            className='text-main-text cursor-pointer w-5 h-5'
                        />
                    </div>

                    <ul className='flex flex-col'>
                        {items.map((item) => (
                            <li
                                key={item.title}
                                className='border-b border-main-text/20'
                            >
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className='flex items-center px-5 py-5 text-main-text font-rubik font-semibold hover:text-main-green transition-colors'
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='px-5 pb-5'>
                    <div className='flex gap-4 mb-4'>
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
                        className='block text-center border border-main-green text-main-green font-rubik py-3 rounded hover:bg-main-green hover:text-background transition-colors'
                    >
                        Baixar CV
                    </a>
                </div >
            </aside >
        </>
    )
}