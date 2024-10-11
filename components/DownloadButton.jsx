import React from "react";

const DownloadButton = ({ href, children }) => {
  return (
    <a
      href={href}
      download
      target="_blank"
      className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-[#25886f] border border-transparent rounded-xl shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#25886f] focus:ring-opacity-50 transform transition-transform duration-300 hover:scale-105"
    >
      <span>{children}</span>
    </a>
  );
};

export default DownloadButton;
