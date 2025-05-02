import React, { useEffect } from "react";
import Image from "next/image";
import { me } from "@/lib/utils/image";
import { TbDownload } from "react-icons/tb";
import WhatIDo from "./what-i-do";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-col gap-16"
    >
      <div className="pb-2 w-fit border-secondary border-b-2">
        <h1 className="text-center text-white text-3xl md:text-[40px] font-bold">
          About Me
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col-reverse items-center md:justify-between lg:mt-8 h-fit w-full">
        <div className="flex flex-col justify-between items-start">
          <div>
            <h1
              style={{
                background: "linear-gradient(to right, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="text-[32px] font-bold"
            >
              Hello!
            </h1>
            <h1 className="lg:text-lg text-justify text-white text-sm font-normal lg:max-w-[500px] xl:max-w-[600px]">
              My name is Yasa Kafi Razzan, but you can call me Yasa. I am a
              graduate of SMK Raden Umar Said Kudus with a keen interest in{" "}
              <span className="text-primary">Web Development</span> and{" "}
              <span className="text-secondary">Mobile Development</span>. I
              enjoy building responsive and dynamic applications for both web
              and mobile platforms, and I’m always eager to explore new
              technologies that enhance performance and user engagement. My
              enthusiasm for development stems from the ability to solve
              real-world problems through clean code and thoughtful interfaces.
              I am proficient with tools like Figma , and I value
              collaboration and clear communication in team environments.
            </h1>
          </div>
          <a href="/CV - Yasa Kafi Razzan.pdf" download="CV - Yasa Kafi Razzan.pdf" className="w-full">
            <button
              type="button"
              className="bg-transparent mt-8 text-center w-full sm:w-48 md:w-64 xl:w-72 rounded-2xl h-14 relative text-white lg:text-md font-medium border-[#27272A] border group"
            >
              <p className="transform -translate-x-5 text-sm">Download CV</p>
              <div className="bg-[#27272A] text-2xl backdrop-blur-xl rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-full z-10 duration-500">
                <TbDownload />
              </div>
            </button>
          </a>
        </div>

        <div>
          <Image
            src={me}
            className="lg:w-[350px] h-[200px] md:h-[350px] rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>

      <div>
        <WhatIDo />
      </div>
    </div>
  );
};

export default About;
