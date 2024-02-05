"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-snug font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to bg-secondary-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "3D Artist",
                1000,
                "Graphics Designer",
                1000,
                "Burhan Ahmad Beigh",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a versatile software developer with a comprehensive background
            in Mobile, Desktop, Web, and Game development, complemented by
            proficiency in 3D Visualization and Animation. I am actively
            pursuing the path to become a proficient{" "}
            <span className="font-bold"> full-stack developer</span>, backed by
            a Master&apos;s degree in Information Technology.
          </p>
          <div>
            <Link href="https://www.linkedin.com/in/burhaann">
              <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white hover:bg-slate-200">
                Hire Me
              </button>
            </Link>
            <Link href="https://drive.google.com/uc?export=download&id=17lzi8pZGlaAgr0giBSUmJXid4IAPxJ3E">
              <button className="px-1 py-1 sm:w-fit rounded-full mr-4 mt-3 bg-gradient-to-br from-blue-500  via-primary-500 to-secondary-500 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-2.png"
              alt="avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
