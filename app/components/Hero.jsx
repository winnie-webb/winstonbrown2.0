import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100vh] bg-cover bg-right-top bg-[url('/hero-2.jpg')]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>

      {/* Introduction Text */}
      <div className="relative z-10 flex flex-col justify-center items-centre h-[100vh] p-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am Winston Brown
        </h1>
        <p className="text-lg md:text-xl max-w-[600px]">
          {" I'm"} a passionate developer specializing in building and
          optimizing modern web applications. Explore my portfolio to see my
          projects and skills in action.
        </p>
      </div>
    </div>
  );
};

export default Hero;
