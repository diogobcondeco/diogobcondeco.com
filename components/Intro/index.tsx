"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import {
  FaGithub,
  FaGithubSquare,
  FaFilePdf,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "../ParticleContainer";
import githubpicture from "@/public/githubpicture.jpg";
import TypeAnimation from "../TypeAnimation";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState(true);

  return (
    <section
      ref={ref}
      id="home"
      className={`${loading ? "bg-[#111827]" : ""} h-dvh sm:h-auto mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4`}
    >
      <ParticleContainer setLoading={setLoading} />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={githubpicture}
              alt="Diogo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Diogo.</span>
        <div className="flex gap-2 justify-center font-bold">
          <span>I&apos;m a</span>
          <TypeAnimation />
        </div>
        {/* at{" "}
        <span className="font-bold">The University of Queensland</span> */}
        I spend my day working on web apps with TypeScript, React.js and
        Next.js.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-4">
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
            href="https://github.com/diogobcondeco"
            target="_blank"
          >
            {/* GitHub <FaGithub className="opacity-70" /> */}
            GitHub <FaGithub />
          </a>

          {/* <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/diogobcondeco/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a> */}

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
            href="https://www.linkedin.com/in/diogobcondeco/"
            target="_blank"
          >
            {/* LinkedIn <BsLinkedin className="opacity-70" /> */}
            LinkedIn <BsLinkedin />
          </a>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
            href="https://twitter.com/diogobcondeco/"
            target="_blank"
          >
            {/* Twitter <FaTwitter className="opacity-70" /> */}
            Twitter <FaTwitter />
          </a>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
            href="resume.pdf"
            target="_blank"
          >
            {/* Resume <FaFilePdf className="opacity-70" /> */}
            Resume <FaDownload />
          </a>

          {/* <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="curriculum.pdf"
          target="_blank"
        >
          <span className="opacity-70">Curriculum</span>
          <FaFilePdf className="opacity-70" />
        </a> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
