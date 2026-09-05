import ButtonHero from "./components/button_hero";

export default function HeroProfileDescription() {
    return (
        <div className="flex flex-col gap-5 items-start">
            <span className="inline-flex items-center gap-2 border rounded-sm border-button-green bg-green-500/1 px-3 py-1 text-sm font-bold text-main-green">
                Disponível para oportunidade
            </span>
            <div className="flex flex-col gap-2 text-main-text">
                <h1 className="text-2xl font-medium">Olá, eu sou <span className="text-main-green">Vitor Soares</span></h1>
                <p className="font-medium text-4xl text-white">Desenvolvedor Full-Stack</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic 
                est reprehenderit laboriosam aut deserunt nisi, exercitationem, aperiam
                doloribus repudiandae id 
                maxime adipisci odit magnam itaque explicabo quasi in alias.</p>
            </div>
            <div className="flex gap-3" >
                <ButtonHero title={"Ver projetos"} className="p-6 text-base font-medium bg-button-green text-main-text" />
                <ButtonHero title={"Download CV"} className="p-6 text-base font-medium bg-background border-button-green text-main-text" />
            </div>
        </div>

    )
}