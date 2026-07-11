import React, { useState, useEffect } from "react";
import profileImg from "../assets/home.jpeg";
import { Mail, Download, ArrowUpRight } from "lucide-react";

import resume from "../assets/Ashwini_tripathi_resume.pdf";

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
      .then((res) => res.json())
      .then((data) => {
        if (data?.totalSolved !== undefined) setLeetcodeSolved(data.totalSolved);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.public_repos !== undefined) setGithubRepos(data.public_repos);
      });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0B0F19] px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-24 md:pt-16 scroll-mt-20 relative overflow-hidden"
    >
      {/* fonts + local animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes blink-caret {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .caret {
          display: inline-block;
          width: 2px;
          margin-left: 2px;
          background: #D4A24C;
          animation: blink-caret 1s step-end infinite;
        }
        @keyframes rise-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rise-in { animation: rise-in 0.6s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .caret { animation: none; opacity: 1; }
          .rise-in { animation: none; }
        }
      `}</style>

      {/* faint grid texture, subject-appropriate (code editor gutter feel) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ECEAE3 1px, transparent 1px), linear-gradient(90deg, #ECEAE3 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-center">
          {/* IMAGE — bracket-framed, like a code block */}
          <div className="flex justify-center rise-in">
            <div className="relative w-[220px] h-[300px] md:w-[260px] md:h-[340px]">
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4A24C]" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4A24C]" />
              <div className="relative w-full h-full overflow-hidden border border-[#232937]">
                <img
                  src={profileImg}
                  alt="Ashwini"
                  className="w-full h-full object-cover grayscale-[15%] transition duration-500 hover:grayscale-0 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <span className="font-mono-ui text-xs tracking-[0.1em] text-[#6EC9B8] uppercase rise-in">
              {`> portfolio / ${new Date().getFullYear()}`}
            </span>

            <h1 className="font-display text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] leading-tight text-[#ECEAE3] rise-in">
              {names[currentName]}
              <span className="caret h-[0.85em] align-middle" />
            </h1>

            <div className="font-mono-ui text-sm text-[#8A8F9E] rise-in">
              <span className="text-[#D4A24C]">role</span>
              <span className="text-[#8A8F9E]">: </span>
              <span className="text-[#6EC9B8]">"{roles[currentRole]}"</span>
            </div>

            <div className="w-10 h-[1px] bg-[#232937] mx-auto md:mx-0" />

            <p className="font-body text-[#8A8F9E] text-sm leading-relaxed md:max-w-[440px] rise-in">
              Building scalable, thoughtful applications — and sharpening problem-solving
              skills through consistent DSA practice on LeetCode.
            </p>

            {/* SIGNATURE: terminal-style live stats panel */}
            <div className="mx-auto md:mx-0 w-full max-w-[420px] rise-in">
              <div className="border border-[#232937] bg-[#131826] text-left overflow-hidden">
                {/* title bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#232937]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4A24C]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6EC9B8]/70" />
                  <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">
                    stats.sh
                  </span>
                </div>

                {/* body */}
                <div className="font-mono-ui text-[13px] px-4 py-3 flex flex-col gap-2.5">
                  <a
                    href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-[#8A8F9E] hover:text-[#ECEAE3] transition-colors"
                  >
                    <span>
                      <span className="text-[#D4A24C]">$</span> curl leetcode/solved
                    </span>
                    <span className="flex items-center gap-1 text-[#6EC9B8]">
                      {leetcodeSolved !== null ? leetcodeSolved : "…"}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </span>
                  </a>

                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-[#8A8F9E] hover:text-[#ECEAE3] transition-colors"
                  >
                    <span>
                      <span className="text-[#D4A24C]">$</span> curl github/repos
                    </span>
                    <span className="flex items-center gap-1 text-[#6EC9B8]">
                      {githubRepos !== null ? githubRepos : "…"}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </span>
                  </a>

                  <div className="flex items-center text-[#8A8F9E]">
                    <span className="text-[#D4A24C]">$</span>
                    <span className="ml-2">_</span>
                    <span className="caret h-[1em] align-middle" />
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1 rise-in">
              <a
                href="mailto:tripathiansh1760@gmail.com"
                className="font-mono-ui flex items-center justify-center gap-2 border border-[#232937] text-[#ECEAE3] px-5 py-2.5 text-sm hover:border-[#6EC9B8] hover:text-[#6EC9B8] transition-colors"
              >
                <Mail size={14} />
                Hire Me
              </a>

              <a
                href={resume}
                download
                className="font-mono-ui flex items-center justify-center gap-2 bg-[#D4A24C] text-[#0B0F19] px-5 py-2.5 text-sm font-medium hover:bg-[#e0b264] transition-colors"
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