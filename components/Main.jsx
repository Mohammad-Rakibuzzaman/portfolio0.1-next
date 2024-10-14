// import React from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// import { FaX } from "react-icons/fa6";
// import DownloadButton from "./DownloadButton";

// const Main = () => {
//   return (
//     <div className="w-full h-screen text-center">
//       <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
//         <div>
//           <p className="uppercase text-sm tracking-widest text-gray-600">
//             Empowering Innovation with Custom Web Solutions
//           </p>
//           <h1 className="py-4 text-gray-600">
//             Hi, I&apos;m <span className="text-[#25886f]">Rakib</span>
//           </h1>
//           <h1 className="py-2 text-gray-600">A Full Stack Developer</h1>
//           <p className="py-4 font-serif text-gray-600 max-w-[70%] m-auto">
//             As a Full-Stack Developer with a strong background in web
//             development and machine learning, I specialize in building dynamic,
//             AI-powered web applications tailored to meet specific client needs.
//             My experience spans from developing robust, scalable backend systems
//             to creating responsive, intuitive frontends using Next.js and React.
//             With a passion for integrating emerging technologies like GPT-based
//             AI models, I focus on delivering solutions that not only solve
//             complex problems but also enhance user experience. I’m committed to
//             staying up-to-date with the latest trends, ensuring that every
//             project I work on is both innovative and reliable.
//           </p>
//           <div className="flex items-center justify-between max-w-[330px] m-auto py-11">
//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FaLinkedinIn />
//             </div>

//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <AiOutlineMail />
//             </div>

//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FaGithub />
//             </div>

//             <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//               <FaX />
//             </div>
//           </div>
//           <DownloadButton href="https://drive.google.com/file/d/1JykRigWBr-gZ6doWkYwDQH7FCoc-Sxks/view?usp=sharing">
//             Download Resume
//           </DownloadButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
import React from "react";
import { AiOutlineMedium } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import DownloadButton from "./DownloadButton";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div>
          {/* Responsive text for the intro */}
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Empowering Innovation with Custom Web Solutions
          </p>
          <h1 className="py-4 text-gray-600 text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-[#25886f]">Rakib</span>
          </h1>
          <h1 className="py-2 text-gray-600 text-2xl md:text-3xl lg:text-4xl">
            A Full Stack Developer
          </h1>
          <p className="py-4 font-serif text-gray-600 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] m-auto text-sm md:text-base lg:text-lg">
            As a Full-Stack Developer with a strong background in web
            development and machine learning, I specialize in building dynamic,
            AI-powered web applications tailored to meet specific client needs.
            My experience spans from developing robust, scalable backend systems
            to creating responsive, intuitive frontends using Next.js and React.
            With a passion for integrating emerging technologies like GPT-based
            AI models, I focus on delivering solutions that not only solve
            complex problems but also enhance user experience. I’m committed to
            staying up-to-date with the latest trends, ensuring that every
            project I work on is both innovative and reliable.
          </p>

          {/* Responsive icons */}
          <div className="flex items-center justify-between max-w-[250px] sm:max-w-[330px] m-auto py-8">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size={20} />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMedium size={20} />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={20} />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaX size={20} />
            </div>
          </div>

          {/* Responsive Download Button */}
          <DownloadButton
            href="https://drive.google.com/file/d/1JykRigWBr-gZ6doWkYwDQH7FCoc-Sxks/view?usp=sharing"
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base lg:text-lg"
          >
            Download Resume
          </DownloadButton>
        </div>
      </div>
    </div>
  );
};

export default Main;
