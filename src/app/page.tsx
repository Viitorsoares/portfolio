import ProfileCard from "@/components/sections/about/profileCard";

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
      </main>
    </div>
  );
}
