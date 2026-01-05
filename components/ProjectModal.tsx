"use client";

import React, { useEffect } from "react";
import type { Project } from "@/data";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

export default function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={cn(
          "relative w-[94vw] max-w-5xl max-h-[90vh] overflow-hidden",
          "rounded-3xl border border-white/10 bg-[#0b0f2a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        )}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "absolute right-4 top-4 z-10 inline-flex items-center justify-center",
            "h-10 w-10 rounded-full border border-white/10 bg-[#10132E]",
            "text-neutral-200 hover:border-white/20 transition"
          )}
          aria-label="Close project"
        >
          <IoClose size={20} />
        </button>

        <div className="p-6 md:p-10 overflow-auto max-h-[90vh]">
          <div className="pr-12">
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-200">
              {project.title}
            </h2>
            <p className="mt-2 text-[#c1c2d3] text-sm md:text-base">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-6">
            <div>
              <h3 className="text-sm md:text-base font-semibold text-neutral-200">
                Key highlights
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm md:text-base text-[#c1c2d3]">
                {project.keyPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-neutral-200">
                Technologies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#10132E] px-3 py-2 text-sm text-neutral-200"
                  >
                    {t.icon ? (
                      <img
                        src={t.icon}
                        alt=""
                        className="h-4 w-4 object-contain opacity-90"
                        loading="lazy"
                      />
                    ) : null}
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-neutral-200">
                Links
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 bg-[#10132E] px-3 py-2 text-sm text-neutral-200 hover:border-white/20 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {project.screenshots.length ? (
              <div>
                <h3 className="text-sm md:text-base font-semibold text-neutral-200">
                  Screenshots
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.screenshots.map((img, i) => (
                    <img
                      key={`${img.src}-${i}`}
                      src={img.src}
                      alt={img.alt ?? ""}
                      className="h-56 md:h-64 lg:h-72 w-full rounded-2xl object-contain border border-white/10 bg-black-100 p-2"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
