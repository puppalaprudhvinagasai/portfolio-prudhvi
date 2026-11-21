"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full-Stack Developer &amp; AI Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Puppala Prudhvi
            </span>
          </span>
          <span className="text-xl md:text-2xl font-medium text-gray-300">
            Full-Stack Developer &amp; AI Enthusiast | Computer Engineering Diploma Student
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Detail-oriented Computer Engineering diploma student at Sri Vasavi
          Institute of Engineering &amp; Technology (Expected Graduation: 2027,
          CGPA: 7.0) from Machilipatnam, Andhra Pradesh, with strong fundamentals
          in Full-Stack Web Development, Data Structures &amp; Algorithms, and
          Software Engineering.
        </motion.p>

        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View Projects
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden lg:flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
