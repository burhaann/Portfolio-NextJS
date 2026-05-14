import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto px-4 sm:px-8 py-8 flex justify-between items-center">
        <Image
          src="/images/logo-transparent.png"
          width={80}
          height={80}
          className="rounded-3xl"
          alt="logo-transparent"
        ></Image>
        <p className="text-slate-500 text-sm md:text-base text-right">
          {new Date().getFullYear()} | Burhan Ahmad Beigh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
