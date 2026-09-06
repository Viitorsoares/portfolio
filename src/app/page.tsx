import AboutProfile from "@/components/sections/about/about_profile";
import HeroProfile from "@/components/sections/hero/hero_profile";
import Technologies from "@/components/sections/technologies/technologies";

export default function Home() {
  return (
    <main className="px-5 flex flex-col gap-28">
      <HeroProfile />
      <AboutProfile />
      <Technologies />
    </main>
  );
}
