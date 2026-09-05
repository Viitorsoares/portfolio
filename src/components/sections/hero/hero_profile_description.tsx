import ButtonHero from "./components/button_hero";

export default function HeroProfileDescription() {
    return (
        <div className="px-5 ">
            <div>
                <h1>Vitor Soares</h1>
                <p>Desenvolvedor Full-Stack</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic 
                est reprehenderit laboriosam aut deserunt nisi, exercitationem, aperiam
                doloribus repudiandae id 
                maxime adipisci odit magnam itaque explicabo quasi in alias.</p>
            </div>
            <div className="flex gap-3" >
                <ButtonHero title="Ver projetos" className="p-6 text-base font-semibold bg-button-green" />
                <ButtonHero title="Dowload CV" className="p-6 text-base font-semibold" />
            </div>
        </div>

    )
}