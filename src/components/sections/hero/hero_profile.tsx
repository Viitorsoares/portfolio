import HeroProfileImage from "@/components/sections/hero/hero_profile_image";
import HeroProfileDescription from "@/components/sections/hero/hero_profile_description";

export default function HeroProfile() {
    return (
        <div
            id="about"
            className="w-full flex flex-col items-center gap-10 sm:gap-12 scroll-mt-28 lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:gap-24"
        >
            <div className="w-full flex justify-center lg:w-75 xl:w-82.5 lg:shrink-0">
                <HeroProfileImage
                    name={"Vitor Soares"}
                    role={"Desenvolvedor Full-Stack"}
                    yearsExp={3}
                    imageUrl={"/images/profile.png"}
                    openToWork
                />
            </div>

            <div className="w-full max-w-2xl">
                <HeroProfileDescription />
            </div>
        </div>
    )
}