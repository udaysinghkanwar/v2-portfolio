import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Grid from "@/components/Grid";
import WorkTimeline from "@/components/WorkTimeline";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Slideshow />
        <WorkTimeline />
        <RecentProjects />
        <div className="py-10">
          <h2 className="heading">
            And <span className="text-purple">Finally...</span>
          </h2>
        </div>
        <Grid />
      </div>
    </main>
  );
}
