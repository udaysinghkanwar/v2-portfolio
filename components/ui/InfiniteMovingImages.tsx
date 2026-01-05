"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Speed = "fast" | "normal" | "slow";
type Direction = "left" | "right";

export type InfiniteMovingImageItem = {
  src: string;
  alt?: string;
};

export function InfiniteMovingImages({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  itemClassName,
  tileClassName,
}: {
  items: InfiniteMovingImageItem[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  tileClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const resolvedItems = useMemo(
    () =>
      items.filter((it) => typeof it?.src === "string" && it.src.trim() !== ""),
    [items]
  );

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    if (scrollerRef.current.dataset.duplicated === "true") return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((node) => {
      scrollerRef.current?.appendChild(node.cloneNode(true));
    });
    scrollerRef.current.dataset.duplicated = "true";

    if (direction === "left") {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    } else {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "reverse"
      );
    }

    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "80s");
    }

    setStart(true);
  }, [direction, speed]);

  if (resolvedItems.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        "mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused"
        )}
      >
        {resolvedItems.map((item, idx) => (
          <li
            key={`${item.src}-${idx}`}
            className={cn(
              "shrink-0 rounded-2xl border border-white/10 bg-black-100",
              "p-3 shadow-[0_8px_16px_rgb(0_0_0/0.35)]",
              itemClassName
            )}
          >
            <div className={cn("grid place-items-center", tileClassName)}>
              <img
                src={item.src}
                alt={item.alt ?? ""}
                className="h-[400px] w-[400px] select-none rounded-lg object-cover opacity-95"
                draggable={false}
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
