"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/data";

export const Timeline = ({
  data,
  heading,
  subheading,
}: {
  data: TimelineEntry[];
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const firstEntryRef = useRef<HTMLDivElement>(null);
  const lastEntryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const containerEl = ref.current;
    if (!containerEl) return;

    const recompute = () => {
      const first = firstEntryRef.current;
      const last = lastEntryRef.current;
      if (!first || !last) return;

      // Use offsets *within* the container so mobile doesn't include extra padding/margins
      // below the last item.
      const top = first.offsetTop;
      const bottom = last.offsetTop + last.offsetHeight;
      setLineTop(top);
      setLineHeight(Math.max(0, bottom - top));
    };

    recompute();
    const raf = requestAnimationFrame(recompute);

    const ro = new ResizeObserver(recompute);
    ro.observe(containerEl);
    window.addEventListener("resize", recompute);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", recompute);
      ro.disconnect();
    };
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black-100 font-sans md:px-10 pb-6 md:pb-8"
      ref={containerRef}
      id="experience"
    >
      <div className="max-w-7xl mx-auto pt-6 pb-4 md:pt-8 md:pb-6 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="heading max-w-4xl mx-auto mb-1">{heading}</h2>
        <p className="text-[#c1c2d3] text-sm md:text-base max-w-2xl mx-auto">
          {subheading}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-6 md:pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            ref={
              index === 0
                ? firstEntryRef
                : index === data.length - 1
                ? lastEntryRef
                : undefined
            }
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black-100 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#10132E] border border-white/10 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-200">
                {item.role}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-200">
                {item.role}
              </h3>
              <div className="rounded-2xl border border-white/10 bg-[#0b0f2a] p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <div className="text-lg md:text-xl font-semibold text-neutral-200">
                      {item.company}
                      {item.location ? (
                        <span className="text-[#c1c2d3] font-normal">
                          {" "}
                          • {item.location}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-[#c1c2d3]">
                    {item.dateRange}
                  </div>
                </div>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm md:text-base text-[#c1c2d3]">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {item.images?.length ? (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {item.images.map((img, i) => (
                      <img
                        key={`${img.src}-${i}`}
                        src={img.src}
                        alt={img.alt ?? ""}
                        className="h-32 w-full rounded-xl object-cover border border-white/10"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : null}

                {item.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.links.map((link) => (
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
                ) : null}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            top: lineTop + "px",
            height: lineHeight + "px",
          }}
          className="absolute md:left-8 left-8 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
