import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import byteboundImg from "../assets/Byteboundbanner.png";
import project2 from "../assets/bgremove.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

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
  {
    title: "DevFolio",
    tag: "Developer Portfolio & Progress Tracker",
    description:
      "A full-stack platform that helps developers showcase projects, track coding progress, analyze resumes with AI, prepare for interviews, and earn skill certifications.",
    live: "https://dev-folio-progress-tracker.vercel.app/",
    image: project5,
  },
];

const domainFromUrl = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const ProjectCard = ({ title, tag, description, live, image }) => (
  <div className="group flex flex-col h-full border border-[#232937] bg-[#131826] overflow-hidden transition-colors duration-200 hover:border-[#6EC9B8]/50">
    {/* Image */}
    <div className="relative h-[190px] overflow-hidden bg-[#0B0F19] border-b border-[#232937]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-2.5 left-2.5 font-mono-ui text-[10px] flex items-center gap-1.5 bg-[#0B0F19]/85 border border-[#232937] px-2 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6EC9B8]" />
        <span className="text-[#6EC9B8]">live</span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-[#ECEAE3] text-[1.05rem] font-normal leading-snug">
          {title}
        </h3>
        <span className="font-mono-ui shrink-0 text-[10px] tracking-[0.06em] uppercase text-[#D4A24C] border border-[#D4A24C]/40 px-2 py-[3px] whitespace-nowrap">
          {tag}
        </span>
      </div>

      <p className="font-mono-ui text-[12px] text-[#8A8F9E] leading-relaxed mb-4 flex-1">
        {description}
      </p>

      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono-ui inline-flex items-center gap-1.5 text-[12.5px] text-[#8A8F9E] w-fit border-b border-[#232937] pb-[3px] transition-colors duration-200 hover:text-[#6EC9B8] hover:border-[#6EC9B8]"
      >
        <span className="text-[#D4A24C]">$</span> open {domainFromUrl(live)}
        <ArrowUpRight size={12} />
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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        .projects-swiper .swiper-slide { height: auto; }
        .projects-swiper .swiper-pagination { bottom: 0; }
        .projects-swiper .swiper-pagination-bullet {
          background: #232937;
          opacity: 1;
          width: 6px;
          height: 6px;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: #D4A24C;
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
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
          {/* Heading + nav row */}
          <div
            className="flex items-end justify-between gap-4 flex-wrap mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div>
              <p className="font-mono-ui text-xs tracking-[0.1em] uppercase text-[#6EC9B8] mb-2">
                {"> selected work"}
              </p>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#ECEAE3] font-normal mb-3 leading-tight">
                Projects
              </h2>
              <div className="w-10 h-px bg-[#232937]" />
            </div>

            {/* Custom nav arrows */}
            <div className="flex gap-2">
              {[prevRef, nextRef].map((ref, i) => (
                <button
                  key={i}
                  ref={ref}
                  className="w-9 h-9 border border-[#232937] bg-[#131826] flex items-center justify-center transition-colors duration-200 hover:border-[#D4A24C] hover:bg-[#D4A24C] group/nav"
                >
                  {i === 0 ? (
                    <ArrowLeft
                      size={15}
                      className="text-[#8A8F9E] group-hover/nav:text-[#0B0F19] transition-colors"
                    />
                  ) : (
                    <ArrowRight
                      size={15}
                      className="text-[#8A8F9E] group-hover/nav:text-[#0B0F19] transition-colors"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* prompt line */}
          <div
            className="font-mono-ui text-[12px] sm:text-[13px] text-[#8A8F9E] mb-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <span className="text-[#D4A24C]">$</span> ls projects/ --deployed
          </div>

          {/* Swiper */}
          <div
            className="pb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
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