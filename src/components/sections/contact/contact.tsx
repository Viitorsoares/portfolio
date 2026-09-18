import ButtonHero from "../components/button_hero";
import {FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact">
            <div>
                <span className="flex flex-row gap-2 text-main-green pb-5">04. <p>Contato</p></span>
                <h2 className="text-[22px] text-white">Entre em contato comigo</h2>
                <p className="text-main-text text-base my-6">
                    Aberto a vagas full-time.
                    Me manda uma mensagem, respondo em até 24 horas.
                </p>
            </div>

            <div className="flex gap-3" >
                <ButtonHero title={"Enviar mensagem"} icon={FaWhatsapp} className="p-6 text-base font-medium bg-button-green text-main-text" />
                <ButtonHero title={"Enviar e-mail "} icon={Mail} className="p-6 text-base font-medium bg-button-green text-main-text" />
            </div>
        </section>
    )
}