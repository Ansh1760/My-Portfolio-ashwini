import React, { useState, useEffect } from "react";
import profileImg from "../assets/home.jpeg";
import ThreeOrb from "../components/ThreeOrb";
import { Mail, Download } from "lucide-react";
import resume from "../assets/AshwiniResume.pdf";

/* ========= CHANGE ONLY THESE ========= */
const LEETCODE_USERNAME = "HmeWhwAXEd"; 
const GITHUB_USERNAME = "Ansh1760";
/* ===================================== */

function Home() {
  const [leetcodeSolved, setLeetcodeSolved] = useState(null);
  const [githubRepos, setGithubRepos] = useState(null);

  const names = ["Ashwini Tripathi", "अश्विनी त्रिपाठी"];
  const roles = [
    "Full Stack Developer",
    "AI / ML Engineer",
    "DSA Learner",
    "Problem Solver",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [currentName, setCurrentName] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /* Email Prefill */
  const emailSubject = encodeURIComponent(
    "Opportunity Discussion with Ashwini"
  );
  const emailBody = encodeURIComponent(
    "Hi Ashwini,\n\nI visited your portfolio and would like to discuss a potential opportunity.\n\nBest regards,"
  );

  /* Role Animation */
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setCurrentName((prev) => (prev + 1) % names.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* Fetch LeetCode */
  useEffect(() => {
    if (!LEETCODE_USERNAME) return;

    fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.totalSolved !== undefined) {
          setLeetcodeSolved(data.totalSolved);
        }
      })
      .catch(() => {});
  }, []);

  /* Fetch GitHub */
  useEffect(() => {
    if (!GITHUB_USERNAME) return;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.public_repos !== undefined) {
          setGithubRepos(data.public_repos);
        }
      })
      .catch(() => {});
  }, []);

  /* Mouse Parallax */
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50
      px-6 py-20"
    >
      <div
        className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">

              <div
                className="absolute -right-80 -top-20 w-72 h-72 opacity-60 hidden xl:block pointer-events-none"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              >
                <ThreeOrb />
              </div>

              <div className="relative w-64 h-80 lg:w-80 lg:h-[28rem]
                overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Ashwini"
                  className="w-full h-full object-cover object-top
                  lg:group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left space-y-6">

            <div className="inline-flex px-4 py-2 rounded-full bg-white border border-violet-200 shadow-sm">
              <span className="text-sm font-semibold text-violet-600">
                {roles[currentRole]}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span
                key={currentName}
                className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
              >
                {names[currentName]}
              </span>
            </h1>

            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
              I build scalable applications and actively practice DSA to
              strengthen core engineering fundamentals.
            </p>

            {/* ===== CLICKABLE STATS ===== */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">

              {leetcodeSolved !== null && (
                <a
                  href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-card cursor-pointer"
                >
                  <p className="stat-number">{leetcodeSolved}+</p>
                  <p className="stat-label">LeetCode Problems</p>
                </a>
              )}

              {githubRepos !== null && (
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stat-card cursor-pointer"
                >
                  <p className="stat-number">{githubRepos}+</p>
                  <p className="stat-label">Public Repositories</p>
                </a>
              )}

            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6 justify-center lg:justify-start flex-wrap">

              <a
                href={`mailto:tripathiansh1760@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                className="btn-outline"
              >
                <Mail size={16} />
                Hire Me
              </a>

              <a
                href={resume}
                download
                className="btn-primary"
              >
                <Download size={16} />
                Resume
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          text-align: center;
          transition: 0.3s;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.08);
          border-color: #7c3aed;
        }
        .stat-number {
          font-size: 1.75rem;
          font-weight: bold;
          color: #7c3aed;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #6b7280;
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          transition: 0.3s;
        }
        .btn-outline:hover {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: #7c3aed;
          color: white;
          transition: 0.3s;
        }
        .btn-primary:hover {
          background: #6d28d9;
        }
      `}</style>
    </section>
  );
}

export default Home;