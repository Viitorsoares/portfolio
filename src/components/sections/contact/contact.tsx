"use client";

import ButtonHero from "../components/button_hero";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use_in_view";

type contactIcons = {
    githubUrl?: string
    linkedinUrl?: string
    emailUrl?: string
}

export default function Contact({
    githubUrl = "#",
    linkedinUrl = "#",
    emailUrl = "#"
}: contactIcons) {
    const { ref, isVisible } = useInView<HTMLElement>();
    return (
        <section
            id="contact"
            ref={ref}
            className={cn(
                "scroll-mt-28 transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            )}
        >
            <div>
                <span className="flex flex-row gap-2 text-main-green text-sm sm:text-base pb-4 sm:pb-5">04. <p>Contato</p></span>
                <h2 className="text-xl sm:text-22 lg:text-2xl text-white">Entre em contato comigo</h2>
                <p className="text-main-text text-sm sm:text-base my-5 sm:my-6 max-w-prose">
                    Aberto a vagas full-time.
                    Me manda uma mensagem, respondo em até 24 horas.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3" >
                <a
                    href="https://wa.me/5518996608363?text=Olá! Vi seu portfólio e gostaria de marcar uma entrevista."
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full sm:w-auto"
                >
                    <ButtonHero title={"Enviar mensagem"} icon={FaWhatsapp} className="w-full sm:w-auto p-6 text-base font-medium bg-button-green text-main-text cursor-pointer hover:bg-button-green/80" />

                </a>
                <a
                    href={emailUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className="w-full sm:w-auto"
                >
                    <ButtonHero title={"Enviar e-mail "} icon={Mail} className="w-full sm:w-auto p-6 text-base font-medium bg-button-green text-main-text cursor-pointer hover:bg-button-green/80" />
                </a>
            </div>

            <div className="flex flex-row gap-4 pt-6 sm:pt-7 text-main-text hover:text-main-green/80 ">
                <a
                    href={githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaGithub className='text-main-text w-8 h-8 sm:w-10 sm:h-10 hover:text-main-green transition-colors'
                    />
                </a>
                <a
                    href={linkedinUrl}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaLinkedin className='text-main-text w-8 h-8 sm:w-10 sm:h-10 hover:text-main-green transition-colors'
                    />
                </a>
            </div>
        </section>
    )
}