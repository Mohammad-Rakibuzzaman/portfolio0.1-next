import React from "react";
// import Image from "next/image";
import propertyImage from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

import Property from "../app/property/Property";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase font-bold text-[#25886f]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ride Sharing"
            backgroundImg={propertyImage}
            tools="Next js & Django"
            projectUrl="https://www.youtube.com/watch?v=F_wX3RJFPBM"
          />
          <ProjectItem
            title="Crypto Web Application"
            backgroundImg={cryptoImg}
            tools="TailwindCSS & Next js"
            projectUrl="/property"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            tools="React js"
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch Demo Clone"
            backgroundImg={twitchImg}
            tools="React js & Flask"
            projectUrl="/Property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
