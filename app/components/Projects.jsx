"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaWindowClose,
  FaRegWindowClose,
} from "react-icons/fa";
import ReactPlayer from "react-player";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Brukgram",
      description:
        "A full-featured social media web app that includes stories, reels, posting, commenting, and user profiles.",
      gif: "/brukgram.gif",
      githubLink: "https://github.com/winnie-webb/brukgram",
      liveLink: "https://brukgram.vercel.app/login?recruiter=true",
    },
    {
      title: "Jamaica Eternal Tours",
      description:
        "The website for the premier bus tour agency in J.A. with features for managing bookings, notifications, and real-time updates.",
      gif: "/jett.gif",
      githubLink: "https://github.com/winnie-webb/eternal-tours-official",
      liveLink: "https://jamaicaeternaltours.com",
    },
    {
      title: "Brukflix",
      description:
        "A sleek, responsive movie streaming platform with real-time video streaming and a modern UI.",
      gif: "/brukflix.gif",
      githubLink: "https://github.com/winnie-webb/brukflix",
      liveLink: "", // No external link needed for Brukflix
    },
    {
      title: "Collin Tickets",
      description:
        "A ticket system for the grand event NEON FIESTA. It generates the tickets for printing and allows for the scanning of those tickets",
      gif: "/collintickets.gif",
      githubLink: "https://github.com/winnie-webb/collintickets",
      liveLink: "https://collintickets2.koyeb.app/",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="projects" className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg overflow-hidden justify-self-center ${
              index === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="relative h-64">
              <Image
                src={project.gif}
                alt={`${project.title} Preview`}
                className="absolute inset-0 w-full h-full object-cover"
                fill={true}
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Links with Icons */}
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                {/* Brukflix: Open Modal for video */}
                {project.title === "Brukflix" ? (
                  <button
                    onClick={openModal}
                    className="flex items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Watch Video
                  </button>
                ) : (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Brukflix Video */}
      {isModalOpen && (
        <div className="fixed p-4 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <FaRegWindowClose className="text-3xl"></FaRegWindowClose>
            </button>
            <div className="p-8">
              <ReactPlayer
                url="/brukflix-video.mp4"
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
