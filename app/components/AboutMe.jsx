import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="relative bg-gray-100 p-20 px-6 md:px-20">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Right Section - Image with Surrounding Elements */}
        <div className="relative w-full flex justify-center items-center">
          {/* Surrounding Decorative Elements */}
          <div className="absolute w-20 h-20 bg-blue-500 rounded-full top-0 left-10"></div>
          <div className="absolute w-16 h-16 bg-purple-500 rounded-full bottom-10 right-16"></div>
          <div className="absolute w-10 h-10 bg-pink-500 rounded-full top-10 right-0"></div>
          <div className="absolute w-12 h-12 bg-green-500 rounded-full bottom-0 left-16"></div>

          {/* Image */}
          <Image
            src="/jersey.jpg"
            alt="Winston Brown"
            width={300}
            height={300}
            className="relative z-10 object-cover border-8 border-white"
          />
        </div>
        {/* Left Section - Text */}
        <div className="text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg leading-relaxed">
            I love bringing creative and efficient solutions through clean code
            and intuitive design. My work reflects a deep understanding of both
            the technical and aesthetic aspects of development. I consider
            myself to be language agnostic so I can pickup almost any technology
            fairly quickly.
          </p>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed">
            Outside of software development I engage in the studies of religion
            and philosophy. I enjoy lifting, running, going to the beach, and
            just socializing with friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
