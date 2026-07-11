import React, { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    slug: "co-founder/bytebound",
    title: "Co-Founder — ByteBound",
    duration: "2024 – Present",
    type: "startup",
    active: true,
    description:
      "Co-founded ByteBound and built modern web solutions for individuals and organizations. Managed requirements gathering, development, deployment, and client communication.",
  },
  {
    slug: "media-web/dcse-srmu",
    title: "Media & Web Management — DCSE Dept, SRMU",
    duration: "2025 – Present",
    type: "institution",
    active: true,
    description:
      "Managing digital media and departmental web presence. Designing, updating, and maintaining official platforms while coordinating with faculty and internal teams.",
  },
  {
    slug: "freelance/web-dev",
    title: "Freelance Web Developer",
    duration: "Ongoing",
    type: "freelance",
    active: true,
    description:
      "Developed responsive, performance-focused websites for clients. Delivered complete solutions from design to deployment.",
  },
  {
    slug: "event/sih-2025",
    title: "Smart India Hackathon (SIH) 2025 — Participant",
    duration: "2025",
    type: "event",
    active: false,
    description:
      "Shortlisted in the internal round. Collaborated in a team to analyze problem statements and propose structured, scalable solutions under time constraints.",
  },
];

const typeAccent = {
  startup: "#D4A24C",
  institution: "#6EC9B8",
  freelance: "#6EC9B8",
  event: "#8A8F9E",
};

const ExperienceCard = ({ slug, title, duration, type, active, description, index, isLast }) => {
  const ref = useRef(null);
  const accent = typeAccent[type] || "#6EC9B8";

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
      className={`font-mono-ui ${isLast ? "" : "pb-6 sm:pb-7 border-b border-dashed border-[#232937] mb-6 sm:mb-7"}`}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* branch line */}
      <div className="flex flex-wrap items-baseline gap-x-2 text-[12px] sm:text-[13px]">
        <span className="text-[#D4A24C]">{active ? "*" : " "}</span>
        <span style={{ color: accent }}>{slug}</span>
        <span className="text-[#5C6272] ml-auto sm:ml-3">{duration}</span>
      </div>

      <h4 className="font-display text-[#ECEAE3] text-[1.05rem] sm:text-[1.15rem] font-normal mt-2 mb-1.5 leading-snug">
        {title}
      </h4>

      <p className="text-[12.5px] sm:text-[13px] text-[#8A8F9E] leading-relaxed mb-2.5 max-w-[560px]">
        {description}
      </p>

      <span
        className="inline-block text-[10.5px] tracking-[0.06em] uppercase px-2 py-[3px] border"
        style={{ color: accent, borderColor: accent + "55" }}
      >
        [{type}]
      </span>
    </div>
  );
};

export default function Experience() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <section
        id="experience"
        className="font-body bg-[#0B0F19] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
      >
        {/* faint grid texture, matches hero + education */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ECEAE3 1px, transparent 1px), linear-gradient(90deg, #ECEAE3 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="max-w-[820px] mx-auto relative">
          {/* Heading */}
          <div className="mb-10 sm:mb-14">
            <p className="font-mono-ui text-xs tracking-[0.1em] uppercase text-[#6EC9B8] mb-2">
              {"> work & exposure"}
            </p>

            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#ECEAE3] font-normal mb-3 leading-tight">
              Experience
            </h2>

            <div className="w-10 h-px bg-[#232937]" />
          </div>

          {/* Terminal panel */}
          <div className="border border-[#232937] bg-[#131826]">
            {/* title bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#232937]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A24C]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EC9B8]/70" />
              <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">branches.sh</span>
            </div>

            {/* prompt line */}
            <div className="font-mono-ui text-[12px] sm:text-[13px] text-[#8A8F9E] px-5 sm:px-6 pt-5">
              <span className="text-[#D4A24C]">$</span> git branch -v --all
            </div>
            <div className="font-mono-ui text-[10.5px] text-[#5C6272] px-5 sm:px-6 mt-1">
              {"* = active"}
            </div>

            {/* Branch list */}
            <div className="px-5 sm:px-6 pt-4 pb-6">
              {experienceData.map((item, i) => (
                <ExperienceCard
                  key={item.slug}
                  {...item}
                  index={i}
                  isLast={i === experienceData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}