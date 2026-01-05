import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import { SparklesPreview } from "./ui/SparklesPreview";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="about" className="pb-20 pt-56 min-h-[60vh] ">
      <div aria-label="Spotlight">
        <Spotlight
          className="-top-40 -left-20 md:-left-5 md:-top-100 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <SparklesPreview />
      <div className="my-20 z-10 w-full">
        <div className="relative max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Building things that make life easier!"
          />
          <p className="text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl text-blue-100 my-8">
            Hi, I am Uday, a software engineer based in Toronto, who is always
            exploring and open to new challenges.
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://linktr.ee/udaykanwar"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto flex justify-center"
            >
              <MagicButton
                title="Connect"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto flex justify-center"
            >
              <MagicButton
                title="View Resume"
                icon={<FaFilePdf />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
