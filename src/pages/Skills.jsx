import React, { useEffect, useRef } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaFigma, FaDocker,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
  SiVite, SiNetlify, SiVercel, SiRailway, SiRender,
  SiFramer, SiMysql, SiPostgresql,
} from "react-icons/si";

const categories = [
  {
    key: "frontend",
    accent: "#6EC9B8",
    skills: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiFramer />, label: "Framer Motion" },
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
      { icon: <SiVite />, label: "Vite" },
    ],
  },
  {
    key: "backend",
    accent: "#D4A24C",
    skills: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <span style={{ fontWeight: 600, fontSize: "0.65rem" }}>API</span>, label: "REST APIs" },
    ],
  },
  {
    key: "tools",
    accent: "#E06C75",
    skills: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <SiVercel />, label: "Vercel" },
      { icon: <SiNetlify />, label: "Netlify" },
      { icon: <SiRailway />, label: "Railway" },
      { icon: <SiRender />, label: "Render" },
      { icon: <FaFigma />, label: "Figma" },
      { icon: <FaDocker />, label: "Docker" },
    ],
  },
];

const SkillPill = ({ icon, label, accent }) => (
  <div
    className="font-mono-ui flex items-center gap-2 px-3 py-2 border border-[#232937] bg-[#0B0F19] text-[#8A8F9E] text-[12.5px] transition-colors duration-200 cursor-default"
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = accent;
      e.currentTarget.style.color = "#ECEAE3";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "#232937";
      e.currentTarget.style.color = "#8A8F9E";
    }}
  >
    <span className="flex items-center text-[0.95rem]" style={{ color: accent }}>
      {icon}
    </span>
    {label}
  </div>
);

const CategoryBlock = ({ keyName, accent, skills, index, isLast }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="font-mono-ui"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* key line */}
      <div className="flex items-baseline gap-1.5 text-[13px] mb-3">
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
        <span style={{ color: accent }}>"{keyName}"</span>
        <span className="text-[#5C6272]">: [</span>
      </div>

      {/* pills, indented like array contents */}
      <div className="grid grid-cols-2 gap-2 pl-4 mb-2">
        {skills.map((s, i) => (
          <SkillPill key={i} icon={s.icon} label={s.label} accent={accent} />
        ))}
      </div>

      <div className="text-[13px] text-[#5C6272]">{isLast ? "]" : "],"}</div>
    </div>
  );
};

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <section
        id="skills"
        className="font-body bg-[#0B0F19] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
      >
        {/* faint grid texture, matches the rest of the site */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ECEAE3 1px, transparent 1px), linear-gradient(90deg, #ECEAE3 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="max-w-[1000px] mx-auto relative">
          {/* Heading */}
          <div className="mb-10 sm:mb-14">
            <p className="font-mono-ui text-xs tracking-[0.1em] uppercase text-[#6EC9B8] mb-2">
              {"> toolkit"}
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#ECEAE3] font-normal mb-3 leading-tight">
              Full Stack Expertise
            </h2>
            <div className="w-10 h-px bg-[#232937]" />
          </div>

          {/* Terminal panel */}
          <div className="border border-[#232937] bg-[#131826]">
            {/* title bar — same three accents as the categories below */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#232937]">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E06C7570" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#D4A24C70" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#6EC9B870" }} />
              <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">stack.json</span>
            </div>

            {/* prompt line */}
            <div className="font-mono-ui text-[12px] sm:text-[13px] text-[#8A8F9E] px-5 sm:px-6 pt-5">
              <span className="text-[#D4A24C]">$</span> cat stack.json
            </div>

            {/* JSON body */}
            <div className="px-5 sm:px-6 pt-4 pb-6">
              <div className="text-[13px] text-[#5C6272] mb-4">{"{"}</div>

              <div className="pl-4 flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0">
                {categories.map((cat, i) => (
                  <CategoryBlock
                    key={cat.key}
                    keyName={cat.key}
                    accent={cat.accent}
                    skills={cat.skills}
                    index={i}
                    isLast
                  />
                ))}
              </div>

              <div className="text-[13px] text-[#5C6272] mt-4">{"}"}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;