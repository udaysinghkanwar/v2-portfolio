import React from "react";
import { Timeline } from "./ui/Timeline";
import { workTimeline } from "@/data";

export default function WorkTimeline() {
  return (
    <section id="experience" className="w-full">
      <Timeline
        data={workTimeline}
        heading={<span>Engineering the Future</span>}
        subheading="Roles, impact, and the systems I built — from production software to LLM research."
      />
    </section>
  );
}
