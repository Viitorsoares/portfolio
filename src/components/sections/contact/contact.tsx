import ButtonHero from "../components/button_hero";
import {FaLinkedin, FaWhatsapp} from "react-icons/fa";

export default function Contact() {
    return (
        <section>
            <div>
                <span className="flex flex-row gap-2 text-main-green pb-5">04. <p>Contato</p></span>
                <h2 className="text-[22px] text-white">Let's build something</h2>
                <p className="text-main-text text-base my-6">
                    Aberto a vagas full-time, freelas e projetos open source interessantes.
                    Me manda uma mensagem — respondo em até 24 horas.
                </p>
            </div>

            <div className="flex gap-3" >
                <ButtonHero title={"Enviar mensagem"} icon={FaWhatsapp} className="p-6 text-base font-medium bg-button-green text-main-text" />
                <ButtonHero title={"LinkedIn"} icon={FaLinkedin} className="p-6 text-base font-medium bg-background border-button-green text-main-text" />
            </div>
        </section>
    )
}