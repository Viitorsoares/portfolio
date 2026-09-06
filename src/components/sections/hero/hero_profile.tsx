import HeroProfileImage from "@/components/sections/hero/hero_profile_image";
import HeroProfileDescription from "@/components/sections/hero/hero_profile_description";

export default function HeroProfile() {
    return (
        <div className="w-full flex flex-col items-center gap-12">
            <div>
                <HeroProfileImage
                    name={"Vitor Soares"}
                    role={"Desenvolvedor Full-Stack"}
                    yearsExp={3}
                    imageUrl={"/images/profile.jpg"}
                    openToWork
                />
            </div>

            <div>
                <HeroProfileDescription />
            </div>
        </div>

    )
}