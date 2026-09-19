import ButtonHero from "../components/button_hero";
import { Download } from 'lucide-react';

export default function HeroProfileDescription() {
    return (
        <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-5 text-main-text">
                <h2 className="text-22 font-medium">Olá, eu sou <span className="text-main-green">Vitor Soares</span></h2>
                <h1 className="font-medium text-4xl text-white">Desenvolvedor Full-Stack</h1>
                <p>Desenvolvedor Full-Stack em constante evolução. Apaixonado por transformar 
                ideias em aplicações web funcionais, limpas e eficientes, unindo o melhor do 
                front-end e do back-end.</p>
            </div>
            <div className="flex gap-3" >
                <ButtonHero title={"Ver projetos"} href="#projects"  className="p-6 text-base font-medium bg-button-green hover:bg-button-green/80 text-main-text" />
                <ButtonHero title={"Baixar CV"}  icon={Download} className="p-6 text-base font-medium bg-background hover:bg-background cursor-pointer border-button-green  text-main-text" />
            </div>
        </div>

    )
}