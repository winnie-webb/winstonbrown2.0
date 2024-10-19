import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - About/Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Winston Brown Logo"
              width={60}
              height={60}
            ></Image>
            <h3 className="text-2xl font-bold ">Winston Brown</h3>
          </a>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="text-gray-400">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="text-gray-400">
          <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/winnie-webb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/winston-brown-b6a085320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-500">
        <p>© {new Date().getFullYear()} Winston Brown. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
