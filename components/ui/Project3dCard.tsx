"use client";

import React from "react";
import type { Project } from "@/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import { FaLocationArrow } from "react-icons/fa6";

export function Project3dCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <CardContainer containerClassName="py-0" className="w-full">
      <button
        type="button"
        onClick={onOpen}
        className="w-full text-left"
        aria-label={`Open project: ${project.title}`}
      >
        <CardBody className="group/card h-100 w-full rounded-3xl border border-white/10 bg-[#0b0f2a] p-6 shadow-[0_8px_16px_rgb(0_0_0/0.35)] hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 transition-shadow">
          <CardItem translateZ="30" className="w-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black-100">
              <img
                src="/bg.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                loading="lazy"
              />
              <img
                src={project.cover}
                alt={`${project.title} cover`}
                className="relative z-10 h-44 w-full object-contain p-6 group-hover/card:shadow-xl rounded-xl"
                loading="lazy"
              />
            </div>
          </CardItem>

          <CardItem translateZ="40" className="mt-6">
            <h2 className="font-bold text-base md:text-lg lg:text-xl line-clamp-1 text-neutral-200">
              {project.title}
            </h2>
          </CardItem>

          <CardItem translateZ="30" className="mt-3">
            <p className="text-sm md:text-base text-[#c1c2d3] line-clamp-2">
              {project.summary}
            </p>
          </CardItem>

          <CardItem translateZ="20" className="mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {project.tech
                  .filter((t) => !!t.icon)
                  .slice(0, 5)
                  .map((t, index) => (
                    <div
                      key={t.name}
                      className="border border-white/10 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={t.icon}
                        alt=""
                        className="p-2 opacity-90"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex md:text-xs text-sm text-purple">
                  View details
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </CardItem>
        </CardBody>
      </button>
    </CardContainer>
  );
}
