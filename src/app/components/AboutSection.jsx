"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>NextJS</li>
        <li>Flutter</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>MySQL</li>
        <li>AWS</li>
        <li>Firebase</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>New Convent High School</li>
        <li>Dr. AGMS Public Higher Secondary School</li> */}
        {/* <li>SP College, Srinagar: Integration Information Technology Course</li> */}
        <li>
          Cluster University, Srinagar:
          <br /> <span className="font-bold">Bachelor&apos;s</span> in
          Information Technology (2018-2021)
        </li>
        <li>
          Cluster University, Srinagar:
          <br /> <span className="font-bold">Master&apos;s</span> in Information
          Technology (2021-2024)
        </li>
        <li>
          Cisco Certified Network Associate (CCNA):
          <br /> from National Institute Of Electronics & Information Technology
          (NIELIT)
        </li>
        <li>ReactJS Bootcamp from Marval Minds</li>
        <li>Scrimba: ReactJS Bootcamp with 4 Projects!</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>3D Modelling</li>
        <li>3D Animation</li>
        <li>100x Devs Cohort 2.0: MERN, System Design, Basic DevOps</li>
        <li>
          Dr. Angela Yu: The Complete Flutter Development Bootcamp with Dart
        </li>
        <li>Brad Traversy: 50 Projects In 50 Days - HTML, CSS & JavaScript</li>
        <li>Back End Development and APIs: FreeCodeCamp Certified</li>
        <li>
          JavaScript Algorithms and Data Structures: FreeCodeCamp Certified
        </li>
        <li>Responsive Web Design: FreeCodeCamp Certified</li>
        <li>Front End Development Libraries: FreeCodeCamp Certified</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
        <Image
          src="/images/about.png"
          alt="about-section"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a software developer with experience in Mobile, Desktop, Web
            and Game development. I also have a good hold on 3D Visualization
            and Animation. Additionally, I am actively dedicated to advancing my
            skills and expertise with the aim of becoming a proficient
            <span className="font-bold"> full-stack developer </span>and have
            earned a Master&apos;s degree in Information Technology, further
            solidifying my qualifications and commitment to advancing within the
            field. Moreover, I am actively strengthening my understanding of
            data structures and algorithms as part of my ongoing learning
            journey.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Courses{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
