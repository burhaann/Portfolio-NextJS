"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description:
      "This Portfolio website built with NextJS, TailwindCSS and EmailJS",
    image: "/images/projects/01.jpg",
    stack: ["NextJS", "TailwindCSS", "Framer-Motion"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Portfolio/",
    previewUrl: "https://burhaann.vercel.app",
  },
  {
    id: 2,
    title: "Promptopia",
    description:
      "Discover and Share Ai Prompts. MongoDB Atlas CRUD App with O Auth 2.0 Authentication!",
    image: "/images/projects/02.jpg",
    stack: ["NextJS", "MongoDB", "TailwindCSS"],
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/burhaann/promptopia/",
    previewUrl: "https://promptopia-gules-six.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description:
      "ProShop, an E-Commerce platform with Admin Dashboard built using MERN Stack, Bootstrap and Redux toolkit!",
    image: "/images/projects/03.jpg",
    stack: ["MERN", "Bootstrap", "Redux Toolkit"],
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/burhaann/Ecommerce-Shop",
    previewUrl: "https://proshop-vcso.onrender.com",
  },
  {
    id: 4,
    title: "Basic College Flutter App",
    description: "Homepage of my College's App",
    image: "/images/projects/04.jpg",
    stack: ["Flutter", "Material Ui", "Firebase"],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/burhaann/College-Basic-Flutter-App",
    previewUrl:
      "https://drive.google.com/file/d/1ViJLXLJg0QjlTbzmlhJ2syZv9POFu6v3",
  },
  {
    id: 5,
    title: "3D Computer Lab Simulator",
    description:
      "Minor College Project: 3D Computer Lab simulator of my College's Lab II using a Python like Language",
    image: "/images/projects/05.jpg",
    stack: ["Godot", "Blender", "Armory"],
    tag: ["All", "Desktop"],
    gitUrl:
      "https://github.com/burhaann/College-6th-Semester-Minor-Project-3D-Computer-Lab-Simulator",
    previewUrl:
      "https://drive.google.com/drive/folders/1shC2Rr1w1B_elSw2q3_F4pNmYxTLYk37",
  },
  {
    id: 6,
    title: "3D Website using ThreeJS",
    description:
      "Random Roofs generates a random 3D Model of a house everytime we visit it.",
    image: "/images/projects/06.jpg",
    stack: ["ThreeJS", "Blender"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Random-Roofs-3D-Website-Using-ThreeJS",
    previewUrl: "http://randomroofs.netlify.app/",
  },
  {
    id: 7,
    title: "MongoDB and Mongoose",
    description: "Connecting to MongoDB and performing various operations.",
    image: "/images/projects/07.jpg",
    stack: ["NodeJS", "ExpressJS", "MongoDB"],
    tag: ["All", "Microservices"],
    gitUrl:
      "https://github.com/burhaann/boilerplate-mongo---MongoDB-and-Mongoose",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "URL Shortener",
    description:
      "Shorten your long urls for free and keep them easy to remember.",
    image: "/images/projects/08.jpg",
    stack: ["NodeJS", "ExpressJS", "MongoDB"],
    tag: ["All", "Microservices"],
    gitUrl: "https://github.com/burhaann/URL-Shortner",
    previewUrl: "https://url-shortner-rplc.onrender.com/",
  },
  {
    id: 9,
    title: "Exercise Tracker",
    description: "Track your daily exercise and keep a log of them.",
    image: "/images/projects/09.jpg",
    stack: ["NodeJS", "ExpressJS", "MongoDB"],
    tag: ["All", "Microservices"],
    gitUrl: "https://github.com/burhaann/Exercise-Tracker-Microservice-FCC",
    previewUrl: "https://exercise-tracker-microservice-fcc.onrender.com/",
  },
  {
    id: 10,
    title: "File Metadata",
    description: "Upload a file and get its metadata.",
    image: "/images/projects/10.jpg",
    stack: ["NodeJS", "ExpressJS", "Multer"],
    tag: ["All", "Microservices"],
    gitUrl: "https://github.com/burhaann/File-Metadata-Microservice",
    previewUrl: "https://file-metadata-microservice-yin4.onrender.com/",
  },
  {
    id: 11,
    title: "Request Header Parser",
    description: "Get the header data of any request.",
    image: "/images/projects/11.jpg",
    stack: ["NodeJS", "ExpressJS"],
    tag: ["All", "Microservices"],
    gitUrl: "https://github.com/burhaann/Request-Header-Parser-Microservice",
    previewUrl: "https://request-header-parser-microservice-9sn2.onrender.com/",
  },
  {
    id: 12,
    title: "TImestamp Microservice",
    description: "Write any date in the url and get its proper timestamp.",
    image: "/images/projects/12.jpg",
    stack: ["NodeJS", "ExpressJS"],
    tag: ["All", "Microservices"],
    gitUrl: "https://github.com/burhaann/Timestamp-Microservice",
    previewUrl: "https://timestamp-microservice-5x69.onrender.com/",
  },
  {
    id: 13,
    title: "Responsive Web Design",
    description:
      "Responsive Web Design: FreeCodeCamp Certified: 20 Projects in total!",
    image: "/images/projects/13.jpg",
    stack: ["HTML", "CSS"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Freecodecamp-Responsive-Web-Design",
    previewUrl: "https://responsive-webdesign-fcc.netlify.app/",
  },
  {
    id: 14,
    title: "Meme Generator",
    description: "Basic Meme Generator using React from Scrimba Course.",
    image: "/images/projects/14.jpg",
    stack: ["ReactJS", "JavaScript"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Scrimba-React-Meme-Generator",
    previewUrl: "https://react-meme-generator-scrimba.netlify.app/",
  },
  {
    id: 15,
    title: "Fullstack NextJS Blog",
    description: "Fullstack NextJS Blog, with proper Authentication.",
    image: "/images/projects/15.jpg",
    stack: ["NextJS", "MongoDB"],
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/burhaann/Fullstack-Blog-NextJS",
    previewUrl: "https://fullstack-blog-next-js.vercel.app/",
  },
  {
    id: 16,
    title: "50 Projects in 50 Days: HTML, CSS, JavaScript",
    description:
      "Brad Traversy: 50 Projects In 50 Days Course - HTML, CSS & JavaScript.",
    image: "/images/projects/16.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/50Projects-50Days-HTML-CSS-Javascript",
    previewUrl: "https://50projects-html-css-js.netlify.app/",
  },
  {
    id: 17,
    title: "AirBNB Clone",
    description: "Basic AirBNB Homepage Clone using React from Scrimba Course",
    image: "/images/projects/17.jpg",
    stack: ["ReactJS", "Javascript"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Scrimba-React-Airbnb-Clone",
    previewUrl: "https://react-airbnb-clone-scrimba.netlify.app/",
  },
  {
    id: 18,
    title: "Front End Development Libraries",
    description:
      "5 Certification Projects, which included lessons from Bootstrap, SASS, jQuery, React and Redux.",
    image: "/images/projects/18.jpg",
    stack: ["ReactJS", "Bootstrap", "jQuery"],
    tag: ["All", "Frontend"],
    gitUrl:
      "https://github.com/burhaann/Freecodecamp-Front-End-Development-Libraries",
    previewUrl: "https://front-end-development.netlify.app",
  },
  {
    id: 19,
    title: "React Markdown Notes App",
    description:
      "React Markdown Notes app using firebase for storage from Scrimba React Course",
    image: "/images/projects/19.jpg",
    stack: ["ReactJS", "Javascript", "Firebase"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Scrimba-React-Markdown-Notes-App",
    previewUrl: "https://notes-using-firebase.netlify.app/",
  },
  {
    id: 20,
    title: "React Tenzies Game",
    description:
      "Tenzies is a fast-paced dice game where players aim to roll all ten of their dice to the same number as quickly as possible.",
    image: "/images/projects/20.jpg",
    stack: ["ReactJS", "Javascript"],
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/burhaann/Scrimba-React-Tenzies-Game",
    previewUrl: "https://tenzies-game-using-react-18.netlify.app/",
  },
  {
    id: 21,
    title: "Multiplayer Gun Battle Game with Audio and Text Chat",
    description:
      "Multiplayer Gun Battle Game using React Three Fiber with Audio and Text Chat using Socket IO and Express on Node JS backend",
    image: "/images/projects/21.jpg",
    stack: ["React Three Fiber", "SocketIO", "Express"],
    tag: ["All", "Fullstack"],
    gitUrl: "https://github.com/burhaann/College-10th-Semester-Major-Project-Lal-Chowk-Gun-Battle",
    previewUrl: "https://college-10th-semester-major-project-lal.onrender.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Microservices"
          isSelected={tag === "Microservices"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
