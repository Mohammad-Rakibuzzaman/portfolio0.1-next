import React from 'react';

export default function ResumeSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h3>
          <div className="mb-8">
            <h4 className="text-xl font-bold">Mohammad Rakibuzzaman</h4>
            <p className="text-gray-600">
              <em>Innovative and deadline-driven Web Developer with 3+ years of experience designing and developing user-centered digital/print marketing materials from initial concept to final deliverable. Skilled in Machine Learning, Computer Vision, Data Analysis, and Web Development.</em>
            </p>
            <ul className="mt-4 text-gray-600">
              <li>Mirpur 11, House: 299/3, Section: 07, Dhaka, Bangladesh</li>
              <li>(+880) 1302766197</li>
              <li>dev.rakibuzzaman@gmail.com</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bachelor of Science (B.Sc.)</h3>
          <div className="mb-8">
            <h5 className="text-lg font-bold">2018 - 2022</h5>
            <p className="text-gray-600"><em>Daffodil International University, Dhaka</em></p>
            <ul className="mt-2 text-gray-600">
              <li>Subject: Software Engineering (Major in Data Science)</li>
              <li>CGPA: 3.32</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Development & DSA</h3>
          <div className="mb-8">
            <h5 className="text-lg font-bold">2023-2024</h5>
            <ul className="mt-2 text-gray-600">
              <li>CS Fundamentals with Phitron: Spring 2023</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Science & Machine Learning</h3>
          <div className="mb-8">
            <h5 className="text-lg font-bold">2020-2021</h5>
            <ul className="mt-2 text-gray-600">
              <li>Developed end-to-end Machine Learning applications.</li>
              <li>Participated in Hackathons and Kaggle.</li>
              <li>Expert tier in Dataset (Top 0.05%) & Notebook (Top 0.07%) on Kaggle.</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Design & Development</h3>
          <div className="mb-8">
            <h5 className="text-lg font-bold">2018-2020</h5>
            <ul className="mt-2 text-gray-600">
              <li>Developed numerous marketing websites.</li>
              <li>Managed up to 5 projects at a given time while under pressure.</li>
              <li>Consulted with clients on web development strategies.</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
