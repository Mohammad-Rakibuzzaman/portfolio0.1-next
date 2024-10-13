// import React from "react";
// import rtlImg from "../public/assets/profile-img.jpg";
// import Image from "next/image";

// const About = () => {
//   return (
//     <div className="w-full md:h-screen p-2 flex items-center py-16">
//       <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//         {/* Left side with text content */}
//         <div className="col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl justify-center p-4 hover:scale-105 ease-in duration-300">
//           <div className="col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl justify-center p-4 hover:scale-105 ease-in duration-300">
//             <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
//               About
//             </p>
//             <h2 className="py-4">Who I Am</h2>
//             <p className="py-2 text-black-800 font-bold text-xl">
//               Full Stack Developer
//             </p>
//             <p>
//               I am an enthusiastic, self-motivated, reliable, responsible, and
//               hard-working person. Dynamic Software Engineer with a passion for
//               innovation and expertise in software development and machine
//               learning. Experienced in end-to-end project development, adept at
//               leveraging diverse programming languages and frameworks to drive
//               impactful solutions.
//             </p>
//             {/* Education */}
//             <div className="max-w-[1240px] m-auto md:grid grid-cols-3 pt-2 gap-8">
//               <div className="col-span-3">
//                 <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
//                   Education
//                 </p>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div className="flex items-center py-2">
//                     <div className="pl-4">
//                       <p className="text-black-800 font-bold">
//                         Daffodil International University
//                       </p>
//                       <p className="text-gray-600">
//                         Bachelor of Science in Software Engineering
//                       </p>
//                       <p className="text-gray-600">CGPA: 3.32 out of 4.00</p>
//                       <p className="text-gray-600">Jan. 2018–April 2022</p>
//                       <p className="text-sm pt-2">
//                         <span className="text-sm text-gray-600 text-black-800 font-bold">
//                           Thesis(Final Semester):
//                         </span>
//                         {"  "}
//                         “Predicting suicidal behavior due to COVID-19” research
//                         will be basically a data driven research. The main goal
//                         of this to predict the suicidal behavior in pandemic
//                         situation using Deep learning concept in Matlab. Applied
//                         Model : ANN.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Experience */}
//             <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//               <div className="col-span-3">
//                 <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
//                   Experience
//                 </p>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div className="flex items-center py-2">
//                     <div className="pl-4">
//                       <p className="text-black-800 font-bold">Masleap plc</p>
//                       <p className="text-gray-600">Software Developer</p>
//                       <p className="text-gray-600">Sept 21 – July 23</p>
//                       <p className="text-sm">
//                         <span className="text-sm text-gray-600 text-black-800 font-bold">
//                           Software Developer:
//                         </span>
//                         {"  "}
//                         Collaborated on projects with technologies highly valued
//                         in the tech industry Next js, Tailwindcss, JavaScript,
//                         Flask, API, and Python programming language based Intel
//                         openvino pre-trained full stack project, especially web
//                         applications using Flask, Nodejs, and React js.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Data Analyst and Machine Learning */}
//             <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
//               <div className="col-span-3">
//                 <div className="grid grid-cols-1 gap-4">
//                   <div className="flex items-center py-2">
//                     <div className="pl-4">
//                       <p className="text-black-800 font-bold">Fiverr</p>
//                       <p className="text-gray-600">
//                         Data Analyst and Machine Learning Engineer (Rate: 5 out
//                         of 5)
//                       </p>
//                       <p className="text-gray-600">2020 – 2022</p>
//                       <p className="text-sm">
//                         <span className="text-sm text-gray-600 font-bold">
//                           Data Analyst and Machine Learning Expert:
//                         </span>
//                         {"  "}
//                         Implemented Data analysis and machine learning
//                         techniques through Data Acquisition, Data cleaning,
//                         Visualization, Feature Engineering, and EDA. Integrated
//                         pre-trained model and fine-tuning with a very good
//                         accuracy. For model training and fine-tuning R and
//                         Python programming languages were used.
// //                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side with image */}

//         <div className="w-full h-auto m-auto col-span-1 flex flex-col items-center justify-start">
//           {/* Image at the top */}
//           <div className="w-full h-[400px] shadow-xl shadow-gray-400 rounded-full flex justify-center p-2 hover:scale-105 ease-in duration-300">
//             <Image
//               className="rounded-full object-cover"
//               src={rtlImg}
//               alt="Profile Picture"
//             />
//           </div>
//           {/* Latest Projects centered below the image */}
//           <p className="py-5 text-[#25886f] font-bold text-center underline cursor-pointer">
//             Check out some of my latest projects.
//           </p>
//         </div>
//         {/* <div className="col-span-1 w-full h-[400px] shadow-xl shadow-gray-400 rounded-full flex justify-center p-2 hover:scale-105 ease-in duration-300">
//           <div className="w-full shadow-xl shadow-gray-400 rounded-full flex justify-center p-2 hover:scale-105 ease-in duration-300">
//             <Image
//               className="rounded-full object-cover"
//               src={rtlImg}
//               alt="Profile Picture"
//             />
//           </div>

//           <p className="py-5 text-[#25886f] font-bold text-center underline cursor-pointer">
//             Check out some of my latest projects.
//           </p>
//         </div> */}

//         {/* Latest Projects centered below the image */}
//         {/* <div className="w-full h-auto m-auto col-span-3 flex flex-col items-center justify-start">
//           <p className="py-5 text-[#25886f] font-bold text-center underline cursor-pointer">
//             Check out some of my latest projects.
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import rtlImg from "../public/assets/profile-img.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* Left side with text content */}
        <div className="col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl justify-center p-4 hover:scale-105 ease-in duration-300">
          <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-black-800 font-bold text-xl">
            Full Stack Developer
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            I am an enthusiastic, self-motivated, reliable, responsible, and
            hard-working person. Dynamic Software Engineer with a passion for
            innovation and expertise in software development and machine
            learning. Experienced in end-to-end project development, adept at
            leveraging diverse programming languages and frameworks to drive
            impactful solutions.
          </p>

          {/* Education Section */}
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 pt-2 gap-8">
            <div className="col-span-3">
              <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
                Education
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start py-2">
                  <div className="pl-4">
                    <p className="text-black-800 font-bold">
                      Daffodil International University
                    </p>
                    <p className="text-gray-600">
                      Bachelor of Science in Software Engineering
                    </p>
                    <p className="text-gray-600">CGPA: 3.32 out of 4.00</p>
                    <p className="text-gray-600">Jan. 2018–April 2022</p>
                    <p className="text-sm pt-2 text-gray-600">
                      <span className="font-bold">
                        Thesis (Final Semester):
                      </span>{" "}
                      “Predicting suicidal behavior due to COVID-19” using Deep
                      Learning in Matlab. Applied Model: ANN.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-3">
              <p className="uppercase text-xl tracking-widest font-bold text-[#25886f]">
                Experience
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start py-2">
                  <div className="pl-4">
                    <p className="text-black-800 font-bold">Masleap plc</p>
                    <p className="text-gray-600">Software Developer</p>
                    <p className="text-gray-600">Sept 21 – July 23</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">Software Developer:</span>{" "}
                      Collaborated on projects related to Intel Openvino with
                      technologies highly valued in the tech industry Next js,
                      Tailwindcss, JavaScript, Flask, API, and Python.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analyst and Machine Learning Section */}
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start py-2">
                  <div className="pl-4">
                    <p className="text-black-800 font-bold">Fiverr</p>
                    <p className="text-gray-600">
                      Data Analyst and Machine Learning Engineer (Rated: 5 out
                      of 5)
                    </p>
                    <p className="text-gray-600">2020 – 2022</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">
                        Data Analyst and ML Expert:
                      </span>{" "}
                      Implemented Data analysis and machine learning techniques
                      through Data Acquisition, Data cleaning, Visualization,
                      Feature Engineering, and Exploratory Data Analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="w-full h-auto m-auto col-span-1 flex flex-col items-center justify-start">
          {/* Image at the top */}
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] shadow-xl shadow-gray-400 rounded-full flex justify-center p-2 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-full object-cover"
              src={rtlImg}
              alt="Profile Picture"
            />
          </div>

          {/* Latest Projects */}
          <p className="py-5 text-[#25886f] font-bold text-center underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
