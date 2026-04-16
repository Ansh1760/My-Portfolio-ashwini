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
import { Code2, Server, Wrench } from "lucide-react";

const categories = [
  {
    label: "Frontend",
    type: "frontend",
    Icon: Code2,
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
    label: "Backend",
    type: "backend",
    Icon: Server,
    skills: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <span style={{ fontWeight: 600, fontSize: "0.75rem" }}>API</span>, label: "REST APIs" },
    ],
  },
  {
    label: "Tools & Deploy",
    type: "tools",
    Icon: Wrench,
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

const SkillPill = ({ icon, label }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 12px",
    background: "#fff",
    border: "1px solid #e8e8e4",
    borderRadius: "3px",
    fontSize: "0.8rem",
    color: "#333",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    transition: "border-color 0.2s, box-shadow 0.2s",
    cursor: "default",
  }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "#bbb";
      e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "#e8e8e4";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <span style={{ fontSize: "1rem", display: "flex", alignItems: "center", color: "#555" }}>
      {icon}
    </span>
    {label}
  </div>
);

const CategoryColumn = ({ label, type, Icon, skills, index }) => {
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
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      {/* Column header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingBottom: "1rem",
        borderBottom: "1px solid #e8e8e4",
      }}>
        <div style={{
          width: "32px", height: "32px",
          background: "#f5f5f2",
          borderRadius: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={15} color="#555" />
        </div>
        <h3 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.1rem",
          color: "#111",
          fontWeight: 400,
          margin: 0,
        }}>
          {label}
        </h3>
      </div>

      {/* Skills grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
      }}>
        {skills.map((s, i) => (
          <SkillPill key={i} icon={s.icon} label={s.label} />
        ))}
      </div>
    </div>
  );
};

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="skills"
        style={{
          background: "#fafaf8",
          padding: "5rem 2rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: "0.5rem",
              fontWeight: 400,
            }}>
              Toolkit
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#111",
              fontWeight: 400,
              margin: "0 0 0.75rem",
              lineHeight: 1.1,
            }}>
              Full Stack Expertise
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#ccc" }} />
          </div>

          {/* Three columns */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
          }}>
            {categories.map((cat, i) => (
              <CategoryColumn key={i} {...cat} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;