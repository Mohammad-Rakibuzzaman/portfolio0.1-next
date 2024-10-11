import React from "react";
import rtlImg from "../public/assets/profile-img.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-yellow-800 text-xl">Full Stack Developer</p>
          <p className="py-4 text-gray-600">
            As a Full-Stack Developer with a strong background in Python
            (Django) and React, I specialize in building dynamic, AI-powered web
            applications tailored to meet specific client needs. My experience
            spans from developing robust, scalable backend systems to creating
            responsive, intuitive frontends using Next.js and React. With a
            passion for integrating emerging technologies like GPT-based AI
            models, I focus on delivering solutions that not only solve complex
            problems but also enhance user experience. I’m committed to staying
            up-to-date with the latest trends, ensuring that every project I
            work on is both innovative and reliable.
          </p>
          <p className="py-2 text-black font-bold underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={rtlImg}
            width={200}
            height={300}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
