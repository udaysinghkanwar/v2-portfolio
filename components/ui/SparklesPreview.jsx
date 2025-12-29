"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";

export function SparklesPreview() {
  return (
    <div className="h-screen w-full bg-black-100 flex flex-row items-center justify-center overflow-hidden rounded-md absolute top-0 left-0">
      <div className="w-full h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
