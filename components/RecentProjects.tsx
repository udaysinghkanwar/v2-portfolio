"use client";

import { useMemo, useState } from "react";

import { projects } from "@/data";
import type { Project } from "@/data";
import ProjectModal from "@/components/ProjectModal";
import { Project3dCard } from "@/components/ui/Project3dCard";

const RecentProjects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const items = useMemo(() => projects as Project[], []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {items.map((item) => (
          <div
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <Project3dCard
              project={item}
              onOpen={() => setActiveProject(item)}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        open={!!activeProject}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

export default RecentProjects;
