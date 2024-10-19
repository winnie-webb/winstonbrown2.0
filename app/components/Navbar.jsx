"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Winston Brown Logo"
                width={60}
                height={60}
              ></Image>
              <h1 className="text-2xl font-bold text-gray-900">
                Winston Brown
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              <a
                href="#projects"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#projects"
              className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#about"
              className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
