import BlogPreview from "@/components/sections/blogPreview";
import Projects from "@/components/sections/projects";
import WhoAmI from "@/components/sections/whoAmI";
import { User } from "@/entities/user.entity";

// data que vem de uma API
const userData: User = {
  name: 'Igor Donatti'
}
export default function Home() {
  return (
    <div className="w-full h-full flex items-center p-4 flex-col">
      <h1 className="font-bold text-4xl">{userData.name?.toUpperCase()}</h1>
      {/* sections: who am i, projects and blog */}
      <div className="flex w-full h-full gap-6">
        <div className="w-1/2 gap-4 flex flex-col">
          <WhoAmI />
          <Projects />
        </div>
        <BlogPreview />
        
      </div>
    </div>
  );
}
