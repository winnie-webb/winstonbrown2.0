import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full min-h-[80vh] flex items-center justify-between bg-white p-5 lg:p-20 "
    >
      {/* Left Section - Introduction */}
      <div className="relative z-10 flex flex-col justify-center items-start text-gray-900 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, {"I'm"} Winston Brown
        </h1>
        <p className="text-lg md:text-xl max-w-[600px] mb-6">
          I am a Software Engineer specializing in building and optimizing
          modern web applications. Explore my portfolio to see my projects and
          skills in action.
        </p>
        <a href="#projects">
          <button className="bg-blue-500 hover:bg-blue-700 transition-all text-white py-3 px-6 rounded-md">
            View Projects
          </button>
        </a>
        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/winnie-webb"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400 transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/winston-brown-b6a085320/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Right Section - Geometric Design Elements */}
      <div className="relative hidden md:flex justify-center items-center w-full md:w-1/2 h-full">
        {/* Main Geometric Element with Image */}
        <div className="relative bg-gray-100 p-10 rounded-lg shadow-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-300 opacity-30 rounded-lg"></div>

          {/* Circular Image Element */}
          <div className="relative z-10 w-64 h-64 flex items-center justify-center bg-white rounded-full border-4 border-blue-400 shadow-lg">
            <Image
              src="/suit.jpg"
              alt="Winston Brown"
              className="w-full h-full object-fill rounded-full"
              fill={true}
            />
          </div>
        </div>

        {/* Extra Geometric Shapes */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-500 opacity-20 rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 opacity-30 rounded-lg"></div>
        <div className="absolute bottom-16 right-20 w-16 h-16 bg-pink-300 opacity-30 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
