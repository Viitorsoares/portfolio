import AboutProfile from "@/components/sections/about/about_profile";
import ContactProfile from "@/components/sections/contact/contact_profile";
import HeroProfile from "@/components/sections/hero/hero_profile";
import Project from "@/components/sections/projects/project";
import StackTechnologies from "@/components/sections/technologies/stack_technologies";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-20 sm:gap-24 lg:gap-28 xl:gap-32">
      <HeroProfile />
      <AboutProfile />
      <StackTechnologies />
      <Project />
      <ContactProfile />
    </main>
  );
}
