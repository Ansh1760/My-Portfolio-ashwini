import React, { useState, useEffect } from "react";
import profileImg from "../assets/home.jpeg";
import { Mail, Download } from "lucide-react";

import resume from "../assets/My_Resume_2_0 (2).pdf"

const LEETCODE_USERNAME = "Ansh1760";
const GITHUB_USERNAME = "Ansh1760";

function Home() {
  const [leetcodeSolved, setLeetcodeSolved] = useState(null);
  const [githubRepos, setGithubRepos] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentName, setCurrentName] = useState(0);

  const names = ["Ashwini Tripathi", "अश्विनी त्रिपाठी"];
  const roles = ["Full Stack Developer", "AI / ML Engineer", "DSA Learner", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setCurrentName((prev) => (prev + 1) % names.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        if (data?.totalSolved !== undefined) setLeetcodeSolved(data.totalSolved);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        if (data?.public_repos !== undefined) setGithubRepos(data.public_repos);
      });
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-[#fafaf8] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[1200px] mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[220px] h-[300px] md:w-[260px] md:h-[340px] shadow-[0_2px_32px_rgba(0,0,0,0.08)] overflow-hidden">
              
              {/* Side line */}
              <div className="absolute -left-2 top-5 bottom-5 w-[2px] bg-black"></div>

              <img
                src={profileImg}
                alt="Ashwini"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-5 text-center md:text-left">

            <span className="text-xs tracking-[0.12em] text-gray-500 uppercase">
              Portfolio · {new Date().getFullYear()}
            </span>

            <h1 className="font-serif text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] leading-tight text-gray-900">
              {names[currentName]}
            </h1>

            <span className="bg-black text-white text-xs px-4 py-1 w-fit mx-auto md:mx-0">
              {roles[currentRole]}
            </span>

            <div className="w-10 h-[1px] bg-gray-300 mx-auto md:mx-0"></div>

            <p className="text-gray-600 text-sm leading-relaxed md:max-w-[420px] border-l-0 md:border-l md:pl-4">
              Building scalable, thoughtful applications — and sharpening problem-solving skills through consistent DSA practice on LeetCode.
            </p>

{/* STATS */}
<div className="flex flex-col sm:flex-row items-center justify-center md:ml-[-150px] gap-4 mt-5 w-full">

  {/* LeetCode */}
  {leetcodeSolved !== null && (
    <a
      href={`https://leetcode.com/${LEETCODE_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto max-w-[320px]
      flex items-center gap-4 p-5 rounded-xl 
      bg-white border border-gray-200 
      transition-all duration-300 group
      hover:shadow-lg hover:-translate-y-1 hover:border-orange-300"
    >
      {/* ICON */}
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-orange-50">
        <svg className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0.244291C13.2048 -0.0833342 12.7557 -0.0814232 12.48 0.245205L5.75601 8.07617C5.48025 8.4038 5.48118 8.8529 5.75874 9.17961L10.588 14.8325L9.39401 16.2462L4.59401 10.6233C3.35401 9.15017 3.39401 7.04117 4.67401 5.60817L11.396 -0.221829C12.288 -1.25983 13.712 -1.25983 14.604 -0.221829L21.324 5.60617C22.606 7.03917 22.646 9.14817 21.406 10.6213L16.566 16.2472L15.372 14.8335L20.182 9.17961C20.4598 8.8529 20.4607 8.4038 20.1849 8.07617L13.483 0.244291Z"/>
        </svg>
      </div>

      {/* TEXT */}
      <div className="text-left">
        <div className="text-xs text-gray-400 font-mono tracking-wider">
          LEETCODE
        </div>

        <div className="text-xl font-bold text-gray-900">
          {leetcodeSolved}
        </div>

        <div className="text-xs text-gray-400">
          Problems Solved
        </div>
      </div>
    </a>
  )}

  {/* GitHub */}
  {githubRepos !== null && (
    <a
      href={`https://github.com/${GITHUB_USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto max-w-[320px]
      flex items-center gap-4 p-5 rounded-xl 
      bg-white border border-gray-200 
      transition-all duration-300 group
      hover:shadow-lg hover:-translate-y-1 hover:border-gray-400"
    >
      {/* ICON */}
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-gray-100">
        <svg className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.49C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.49 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.49 20.68 14.49 21C14.49 21.27 14.65 21.59 15.16 21.49C19.13 20.17 22 16.42 22 12C22 6.48 17.52 2 12 2Z"/>
        </svg>
      </div>

      {/* TEXT */}
      <div className="text-left">
        <div className="text-xs text-gray-400 font-mono tracking-wider">
          GITHUB
        </div>

        <div className="text-xl font-bold text-gray-900">
          {githubRepos}
        </div>

        <div className="text-xs text-gray-400">
          Repositories
        </div>
      </div>
    </a>
  )}

</div>
            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-3">

              <a
                href="mailto:tripathiansh1760@gmail.com"
                className="flex items-center justify-center gap-2 border border-gray-300 px-5 py-2 text-sm hover:border-gray-600 transition"
              >
                <Mail size={14} />
                Hire Me
              </a>

              <a
                href={resume}
                download
                className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition"
              >
                <Download size={14} />
                Resume
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;