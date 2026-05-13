"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [duration, setDuration] = useState("");

  useEffect(() => {
    // Calculate dynamic duration from August 2025 to Present
    const calculateDuration = () => {
      const start = new Date("2025-08-01");
      const now = new Date();
      
      let months = (now.getFullYear() - start.getFullYear()) * 12;
      months -= start.getMonth();
      months += now.getMonth();
      
      // Inclusive of the starting month
      months += 1;

      if (months <= 0) return "0 months";
      
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      
      let durationParts = [];
      if (years > 0) {
        durationParts.push(`${years} year${years > 1 ? 's' : ''}`);
      }
      if (remainingMonths > 0 || years === 0) {
        durationParts.push(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`);
      }
      
      return durationParts.join(' ');
    };

    setDuration(calculateDuration());
  }, []);

  const experienceData = {
    title: "Associate",
    subtitle: "(Full Stack Developer)",
    company: "Google via Qualitest Group",
    startDate: "August 2025",
    description: [
      "I work as a Google Extended Workforce (xWF) professional hired through Qualitest.",
      "I build web applications using JavaScript.",
      "I create dashboards and automation solutions using Google Apps Script.",
      "I develop and deploy websites for internal tools and workflows.",
      "I work on data handling, reporting, and process automation.",
      "I integrate frontend interfaces with backend services and APIs.",
    ],
  };

  const gradientColors = [
    "from-purple-500 to-pink-500",
    "from-blue-400 to-cyan-400",
    "from-teal-400 to-emerald-500",
    "from-orange-400 to-red-500",
    "from-pink-500 to-rose-400",
    "from-indigo-400 to-purple-500"
  ];

  return (
    <section id="experience" className="my-12 md:my-24 px-4 xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#1c1b23] to-[#121212] rounded-3xl p-8 md:p-12 border border-[#33353F] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background ambient glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Centered Header Section */}
            <div className="text-center mb-12 pb-8 border-b border-[#33353F]/50">
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-1 tracking-tight">
                {experienceData.title}
              </h3>
              <div className="text-lg md:text-xl text-[#ADB7BE] font-medium mb-4">
                {experienceData.subtitle}
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-6">
                {experienceData.company}
              </h4>
              <div className="inline-flex items-center bg-[#181818]/80 backdrop-blur-md border border-[#33353F] text-[#ADB7BE] px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-inner">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {experienceData.startDate} - Present {duration ? `· ${duration}` : ""}
              </div>
            </div>

            {/* Creative Grid for Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {experienceData.description.map((desc, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative bg-[#181818]/60 backdrop-blur-lg p-6 rounded-2xl border border-[#33353F] hover:border-gray-500 transition-all duration-300 group overflow-hidden shadow-md"
                >
                  {/* Top glowing accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradientColors[i % gradientColors.length]} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex items-start mt-2">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br ${gradientColors[i % gradientColors.length]} text-white shadow-lg shadow-black/50 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#ADB7BE] text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
