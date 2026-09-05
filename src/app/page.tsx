import AboutProfile from "@/components/sections/about/about_profile";
import HeroProfile from "@/components/sections/hero/hero_profile";

export default function Home() {
  return (
    <main className=" px-5">
      <HeroProfile />
      <AboutProfile />
    </main>
  );
}
