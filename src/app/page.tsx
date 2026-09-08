import AboutProfile from "@/components/sections/about/about_profile";
import Contact from "@/components/sections/contact/contact";
import HeroProfile from "@/components/sections/hero/hero_profile";
import Project from "@/components/sections/projects/project";
import StackTechnologies from "@/components/sections/technologies/stack_technologies";

export default function Home() {
  return (
    <main className="px-5 flex flex-col gap-25">
      <HeroProfile />
      <AboutProfile />
      <StackTechnologies />
      <Project />
      <Contact />
    </main>
  );
}
