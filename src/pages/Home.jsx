import React, { useState, useEffect, useMemo } from "react";
import profileImg from "../assets/home.jpeg";
import ThreeOrb from "../components/ThreeOrb";
import { Mail } from "lucide-react";
import { Download } from "lucide-react";

/* ---------- Tech Icon ---------- */
const TechIcon = ({ children, delay = 0 }) => (
  <div
    className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/90
    border border-gray-200 flex items-center justify-center text-xl
    shadow-md hover:shadow-xl transition-all duration-500 animate-float"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 
      opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
    <span className="relative z-10">{children}</span>
  </div>
);

/* ---------- Particle ---------- */
const Particle = ({ style }) => (
  <div
    className="absolute w-2 h-2 bg-violet-400/30 rounded-full animate-float-fast"
    style={style}
  />
);

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentName, setCurrentName] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleCount, setParticleCount] = useState(12);

  const names = ["Ashwini Tripathi", "अश्विनी त्रिपाठी"];

  const roles = [
    "Full Stack Developer",
    "AI / ML Engineer",
    "DSA Learner",
    "Problem Solver",
  ];

  /* ---------- Initial Animation + Single Interval ---------- */
  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setCurrentName((prev) => (prev + 1) % names.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------- Responsive Particle Count ---------- */
  useEffect(() => {
    const updateParticles = () => {
      setParticleCount(window.innerWidth < 768 ? 5 : 12);
    };

    updateParticles();
    window.addEventListener("resize", updateParticles);
    return () => window.removeEventListener("resize", updateParticles);
  }, []);

  /* ---------- Mouse Parallax (Desktop Only) ---------- */
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

  /* ---------- Generate Particles ---------- */
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3000}ms`,
      animationDuration: `${5 + Math.random() * 4}s`,
    }));
  }, [particleCount]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50
      px-4 sm:px-6 lg:px-16"
    >
      {/* Particles */}
      {particles.map((style, i) => (
        <Particle key={i} style={style} />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:20px_20px] opacity-20" />

      <div
        className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">

              {/* 3D Orb */}
              <div
                className="absolute -right-80 -top-20 w-72 h-72 opacity-60 hidden xl:block pointer-events-none"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
              >
                <ThreeOrb />
              </div>

              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-violet-600 to-indigo-600 
                rounded-[2.5rem] opacity-20 blur-2xl hidden sm:block" />

              {/* Image */}
              <div
                className="relative animate-float-slow
                w-56 h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-[28rem]
                overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                <img
                  src={profileImg}
                  alt="Ashwini Tripathi"
                  className="w-full h-full object-cover
                  lg:group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Tech Icons */}
              <div className="absolute -right-6 top-16 hidden sm:block">
                <TechIcon>⚛️</TechIcon>
              </div>
              <div className="absolute -left-6 top-32 hidden sm:block">
                <TechIcon delay={200}>🐍</TechIcon>
              </div>
              <div className="absolute -right-4 bottom-28 hidden md:block">
                <TechIcon delay={400}>🤖</TechIcon>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center lg:text-left space-y-7">

            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2
              rounded-full bg-white/90 border border-violet-200 shadow-sm">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-violet-600">
                {roles[currentRole]}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I’m{" "}
              <span
                key={currentName}
                className="inline-block bg-clip-text text-transparent
                bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600
                animate-fade-in"
              >
                {names[currentName]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 font-normal text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I design and build production-ready web applications using modern
              frontend and backend technologies. Alongside development, I
              actively practice Data Structures & Algorithms to strengthen core
              problem-solving and engineering fundamentals.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-center lg:justify-start pt-2">
<a
  href="mailto:tripathiansh1760@gmail.com"
  className="inline-flex items-center gap-2
  px-4 py-2 rounded-lg text-sm font-semibold
  bg-white border border-gray-300 text-gray-800
  hover:border-violet-500 hover:text-violet-600
  hover:shadow-md transition-all"
>
  <Mail size={16} />
  Hire Me
</a>


<a
  href="/resume.pdf"
  download
  className="group inline-flex items-center gap-2
  px-4 py-2 rounded-lg text-sm font-semibold
  bg-violet-600 text-white
  hover:bg-violet-700 hover:shadow-md
  transition-all"
>
  <Download
    size={16}
    className="text-yellow-300 group-hover:translate-y-0.5 transition-transform"
  />
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
