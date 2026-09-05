import ProfileCard from "@/components/sections/hero/hero_profile_Card";
import HeroProfileDescription from "@/components/sections/hero/hero_profile_description";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-1 w-full flex-col items-center justify-between  ">
        <ProfileCard
          name="Vitor Soares"
          role="Desenvolvedor Full-Stack"
          yearsExp={3}
          imageUrl="/images/profile.jpg"
          openToWork
        />

        <HeroProfileDescription />

      </main>
    </div>
  );
}
