"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [duration, setDuration] = useState("");
  const [showPastExperience, setShowPastExperience] = useState(false);

  const pastExperiences = [
    {
      role: "Credit Card Counsellor",
      company: "WISHFIN.COM",
      logo: "/images/wishfin-logo.png",
      duration: "Feb 2025 - Aug 2025",
      description: []
    },
    {
      role: "Junior IT Recruiter",
      company: "Aquest Staffing",
      logo: "/images/aquest-logo.png",
      duration: "Sep 2024 - Oct 2024",
      description: [
        "Worked in the US IT Recruitment process.",
        "Moved on from the role as the night shift schedule and 3 hours of daily travel were not sustainable in the long run."
      ]
    }
  ];

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
        durationParts.push(`${years} year${years > 1 ? "s" : ""}`);
      }
      if (remainingMonths > 0 || years === 0) {
        durationParts.push(
          `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`,
        );
      }

      return durationParts.join(" ");
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
    "from-indigo-400 to-purple-500",
  ];

  return (
    <section id="experience" className="my-12 md:my-24 xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#1c1b23] to-[#121212] rounded-3xl p-5 md:p-12 border border-[#33353F] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background ambient glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Centered Header Section */}
            <div className="text-center mb-12 pb-8 border-b border-[#33353F]/50">
              <div className="inline-block mx-auto text-center">
                <h3 className="text-[2.6rem] md:text-[4.2rem] font-extrabold text-white leading-none tracking-tight mb-2">
                  {experienceData.title}
                </h3>
                <div className="text-[1rem] md:text-[1.6rem] text-[#ADB7BE] font-semibold leading-none mb-4 tracking-widest">
                  {experienceData.subtitle}
                </div>
              </div>
              <h4 className="text-center text-xl md:text-2xl font-bold mb-6 leading-[2rem]">
                {/* Google block */}
                <span className="whitespace-nowrap inline-flex items-center align-bottom">
                  <Image
                    src="/images/google-logo.svg"
                    alt="Google Logo"
                    title="Google Logo"
                    width={28}
                    height={28}
                    className="drop-shadow-md cursor-pointer mr-[1px]"
                  />
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                
                {/* Via Text */}
                <span className="text-[#ADB7BE] font-medium mx-1 align-bottom">via</span>
                
                {/* Qualitest block */}
                <span className="whitespace-nowrap inline-flex items-center align-bottom">
                  <Image
                    src="/images/qualitest-logo.svg"
                    alt="Qualitest Logo"
                    title="Qualitest Group Logo"
                    width={28}
                    height={28}
                    className="drop-shadow-md cursor-pointer mr-[1px]"
                  />
                  <span className="text-white">ualitest</span>
                </span>
                
                {/* Group Text */}
                <span className="text-white ml-[0.35rem] align-bottom inline-block">Group</span>
              </h4>
              <div className="inline-flex flex-wrap justify-center items-center bg-[#181818]/80 backdrop-blur-md border border-[#33353F] text-[#ADB7BE] px-5 py-3 rounded-3xl md:rounded-full text-sm md:text-base font-semibold shadow-inner text-center gap-y-1">
                <span className="flex items-center whitespace-nowrap">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {experienceData.startDate} - Present
                </span>
                {duration && (
                  <span className="whitespace-nowrap ml-1 md:ml-1.5 text-primary-400">
                    <span className="hidden md:inline mr-1.5 text-[#ADB7BE]">·</span>
                    {duration}
                  </span>
                )}
              </div>
            </div>

            {/* Creative Grid for Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {experienceData.description.map((desc, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative bg-[#181818]/60 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-[#33353F] hover:border-gray-500 transition-all duration-300 group overflow-hidden shadow-md"
                >
                  {/* Top glowing accent line */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradientColors[i % gradientColors.length]} opacity-60 group-hover:opacity-100 transition-opacity`}
                  ></div>

                  <div className="mt-1 md:mt-2 flex items-start">
                    <span
                      className={`inline-flex flex-shrink-0 w-6 h-6 md:w-10 md:h-10 rounded-md md:rounded-xl items-center justify-center mr-3 md:mr-4 bg-gradient-to-br ${gradientColors[i % gradientColors.length]} text-white shadow-lg shadow-black/50 transform group-hover:rotate-6 transition-transform duration-300 mt-0.5 md:mt-0`}
                    >
                      <svg
                        className="w-3.5 h-3.5 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-[#ADB7BE] text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Button to Toggle Past Experience */}
        <div className="mt-8 flex justify-center">
          <div className="relative group">
            <button
              onClick={() => setShowPastExperience(!showPastExperience)}
              className="p-3 rounded-full bg-[#181818]/80 backdrop-blur-md border border-[#33353F] text-white hover:bg-[#2a2a35] hover:border-primary-500 transition-all duration-300 flex items-center justify-center shadow-lg w-12 h-12"
              aria-label={showPastExperience ? "Hide Past Work Experience" : "Show Past Work Experience"}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${showPastExperience ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#23232b] border border-[#33353F] text-[#ADB7BE] text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50 shadow-xl">
              {showPastExperience ? "Hide Past Work Experience" : "Show Past Work Experience"}
            </div>
          </div>
        </div>

        {/* Past Experience Details */}
        {showPastExperience && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-6 space-y-6 overflow-hidden"
          >
            {pastExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-b from-[#1c1b23] to-[#121212] p-6 md:p-8 rounded-3xl border border-[#33353F] shadow-lg relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 gap-3 md:gap-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center overflow-hidden border border-[#33353F]">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="text-base md:text-lg text-primary-400 font-semibold mt-1">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#ADB7BE] text-sm md:text-base font-medium flex items-center bg-[#181818] border border-[#33353F] px-4 py-2 rounded-full w-fit shrink-0">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {exp.duration}
                  </div>
                </div>
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-none space-y-3 mt-4 text-[#ADB7BE]">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-3 mt-1.5 shrink-0">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span className="text-sm md:text-base leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
