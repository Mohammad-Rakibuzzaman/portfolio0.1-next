import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { FaX } from "react-icons/fa6";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest font-bold uppercase text-[#25886f]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1608499296275-1f22c6391b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Full Stack Developer</h2>
                <p className="py-4">
                  I am available for freelance project or full-time positions.
                  Contact me and let&apos;s talk.
                </p>{" "}
                <p className="py-4">
                  {" "}
                  <span className="text-sm tracking-widest font-bold uppercase text-[#38393d]">
                    Gmail:
                  </span>{" "}
                  dev.rakibuzzaman@gmail.com{" "}
                </p>
                Whatsapp Number: +880 1302766197
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-rakib-b99975170/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="mailto:dev.rakibuzzaman@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Mohammad-Rakibuzzaman"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="https://x.com/_astaV33" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaX />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      WhatsApp Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#377c6b] to-[#39af92]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#25886f]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
