import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  stack,
  gitUrl,
  previewUrl,
}) => {
  const getRandomColor = () => {
    // Generate random RGB values
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
  };
  // const getRandomColor = () => {
  //   const colors = [
  //     "red",
  //     "orange",
  //     "amber",
  //     "yellow",
  //     "lime",
  //     "green",
  //     "emerald",
  //     "teal",
  //     "cyan",
  //     "sky",
  //     "blue",
  //     "indigo",
  //     "violet",
  //     "purple",
  //     "fuchsia",
  //     "pink",
  //     "rose",
  //   ]; // Tailwind CSS color palette
  //   const randomIndex = Math.floor(Math.random() * colors.length);
  //   return `border-${colors[randomIndex]}-600`; // Construct the Tailwind CSS class
  // };
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="bg-[#1c1b23]">
        <div className="flex flex-wrap justify-center pt-2">
          {stack &&
            stack.map((item, index) => {
              const randomColor = getRandomColor();
              return (
                <div
                  className={`bg-transparent hover:bg-blue-500 text-white-900 text-sm hover:text-white py-2 px-3 border-4   hover:border-transparent rounded-xl mt-2 mr-1 inline-block  bg-[#14131a]`}
                  style={{
                    borderColor: randomColor,
                  }}
                  key={index}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = randomColor;
                  }}
                >
                  <em>{item}</em>
                </div>
              );
            })}
        </div>
        <div className="text-white rounded-b-xl py-4 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
