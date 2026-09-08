import ButtonHero from "../components/button_hero";
import { Download } from 'lucide-react';

export default function HeroProfileDescription() {
    return (
        <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-5 text-main-text">
                <h2 className="text-22 font-medium">Olá, eu sou <span className="text-main-green">Vitor Soares</span></h2>
                <h1 className="font-medium text-4xl text-white">Desenvolvedor Full-Stack</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic 
                est reprehenderit laboriosam aut deserunt nisi, exercitationem, aperiam
                doloribus repudiandae id 
                maxime adipisci odit magnam itaque explicabo quasi in alias.</p>
            </div>
            <div className="flex gap-3" >
                <ButtonHero title={"Ver projetos"} className="p-6 text-base font-medium bg-button-green text-main-text" />
                <ButtonHero title={"Download CV"} icon={Download} className="p-6 text-base font-medium bg-background border-button-green text-main-text" />
            </div>
        </div>

    )
}