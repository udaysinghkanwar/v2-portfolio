"use client";

import React from "react";
import { InfiniteMovingImages } from "@/components/ui/InfiniteMovingImages";
import { slideshowImages } from "@/data";

export default function Slideshow() {
  return (
    <section className="py-12 md:py-14" aria-label="Slideshow">
      <h2 className="heading">
        Some <span className="text-purple">visuals</span> I vibe with
      </h2>

      <div className="mt-6">
        <InfiniteMovingImages
          items={slideshowImages}
          speed="normal"
          direction="left"
        />
      </div>
    </section>
  );
}
