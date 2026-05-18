import React, { useRef, useEffect, useState } from "react";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import byteboundImg from "../assets/Byteboundbanner.png";
import project2 from "../assets/bgremove.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    title: "ByteBound Website",
    tag: "Agency",
    description:
      "A modern digital agency website built using React and TailwindCSS, focused on performance and clean UI/UX.",
    live: "https://www.bytebound.in/",
    image: byteboundImg,
  },
  {
    title: "BG Remover",
    tag: "AI Tool",
    description:
      "AI-based background removal tool with modern UI and optimized speed for real-time image processing.",
    live: "https://bgremoverbyansh.netlify.app/",
    image: project2,
  },
  {
    title: "To Do List",
    tag: "Productivity",
    description:
      "Responsive task management app allowing users to add, complete, and delete tasks efficiently.",
    live: "https://mytaskansh.netlify.app/",
    image: project3,
  },
 {
  title: "SkillGap AI",
  tag: "AI Career Platform",
  description:
    "AI-powered career platform featuring ATS resume analysis, interview preparation, and skill certification system with personalized insights and progress tracking.",
  live: "https://skills-gap-ai.vercel.app/",
  image: project4,
},
];

const ProjectCard = ({ title, tag, description, live, image }) => (
  <div style={{
    background: "#fff",
    border: "1px solid #e8e8e4",
    borderRadius: "4px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "box-shadow 0.2s, border-color 0.2s",
  }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
      e.currentTarget.style.borderColor = "#bbb";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "#e8e8e4";
    }}
  >
    {/* Image */}
    <div style={{ height: "200px", overflow: "hidden", background: "#f5f5f2" }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.5s ease",
          display: "block",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Content */}
    <div style={{ padding: "1.25rem 1.4rem", display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.6rem" }}>
        <h3 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.1rem",
          color: "#111",
          fontWeight: 400,
          margin: 0,
          lineHeight: 1.3,
        }}>
          {title}
        </h3>
        <span style={{
          fontSize: "0.68rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#888",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          background: "#f5f5f2",
          padding: "3px 10px",
          borderRadius: "2px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          {tag}
        </span>
      </div>

      <p style={{
        fontSize: "0.82rem",
        color: "#888",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        lineHeight: 1.7,
        margin: "0 0 1.25rem",
        flex: 1,
      }}>
        {description}
      </p>

      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.78rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: "#111",
          textDecoration: "none",
          borderBottom: "1px solid #ccc",
          paddingBottom: "2px",
          width: "fit-content",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "#111"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "#ccc"}
      >
        <ExternalLink size={13} />
        Live Preview
      </a>
    </div>
  </div>
);

function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-swiper .swiper-slide {
          height: auto;
        }

        .projects-swiper .swiper-pagination {
          bottom: 0;
        }

        .projects-swiper .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 6px;
          height: 6px;
        }

        .projects-swiper .swiper-pagination-bullet-active {
          background: #111;
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        style={{
          background: "#fafaf8",
          padding: "5rem 2rem 5rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          {/* Heading + Nav row */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <div>
              <p style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#aaa",
                marginBottom: "0.5rem",
                fontWeight: 400,
              }}>
                Selected Work
              </p>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#111",
                fontWeight: 400,
                margin: "0 0 0.75rem",
                lineHeight: 1.1,
              }}>
                Projects
              </h2>
              <div style={{ width: "40px", height: "1px", background: "#ccc" }} />
            </div>

            {/* Custom nav arrows */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[prevRef, nextRef].map((ref, i) => (
                <button
                  key={i}
                  ref={ref}
                  style={{
                    width: "38px", height: "38px",
                    borderRadius: "3px",
                    border: "1px solid #e0e0dc",
                    background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#111";
                    e.currentTarget.style.background = "#111";
                    e.currentTarget.querySelector("svg").style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#e0e0dc";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.querySelector("svg").style.color = "#555";
                  }}
                >
                  {i === 0
                    ? <ArrowLeft size={15} color="#555" style={{ transition: "color 0.2s" }} />
                    : <ArrowRight size={15} color="#555" style={{ transition: "color 0.2s" }} />
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Swiper */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            paddingBottom: "2rem",
          }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
              }}
              className="projects-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;