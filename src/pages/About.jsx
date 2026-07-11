import React, { useEffect, useRef, useState } from "react";

const educationData = [
  {
    hash: "a3f1c2d",
    year: "2023 – 2027",
    title: "B.Tech — Computer Science Engineering",
    place: "Shri Ramwaroop Memorial University, Lucknow",
    score: "CGPA: 7.8",
    details: "Data Structures, DBMS, OS, Computer Networks.",
  },
  {
    hash: "88e4b91",
    year: "2022 – 2023",
    title: "Intermediate",
    place: "Sardar Patel Inter College, Bahraich",
    details: "Mathematics & Science focused.",
  },
  {
    hash: "1c77a0f",
    year: "2020 – 2021",
    title: "High School",
    place: "Pt. Ram Naresh Inter College, Bahraich",
    details: "Strong academic foundation.",
  },
];

const EducationCard = ({ hash, year, title, place, score, details, index, isLast }) => {
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
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Rail: dot + connecting line */}
      <div className="hidden sm:flex flex-col items-center">
        <span className="w-2 h-2 rounded-full bg-[#D4A24C] mt-1.5 shrink-0" />
        {!isLast && <span className="w-px flex-1 bg-[#232937] mt-1.5" />}
      </div>

      {/* Commit-log entry */}
      <div className={`font-mono-ui flex-1 ${isLast ? "" : "pb-6 sm:pb-7"}`}>
        <div className="text-[12px] sm:text-[13px] text-[#8A8F9E] flex flex-wrap items-baseline gap-x-2">
          <span className="text-[#D4A24C]">commit</span>
          <span>{hash}</span>
          <span className="text-[#6EC9B8] ml-auto sm:ml-3">{year}</span>
        </div>

        <h4 className="font-display text-[#ECEAE3] text-[1.05rem] sm:text-[1.2rem] font-normal mt-2 mb-1 leading-snug">
          {title}
        </h4>

        <p className="text-[12.5px] sm:text-[13px] text-[#8A8F9E] leading-relaxed">{place}</p>

        {score && (
          <p className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13px] text-[#6EC9B8] mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6EC9B8]" />
            {score}
          </p>
        )}

        {details && (
          <p className="text-[12px] sm:text-[12.5px] text-[#5C6272] leading-relaxed mt-2">
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <section
        id="education"
        className="font-body bg-[#0B0F19] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
      >
        {/* faint grid texture, matches hero */}
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
              {"> background / education"}
            </p>

            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#ECEAE3] font-normal mb-3 leading-tight">
              Education
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
              <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">education.log</span>
            </div>

            {/* prompt line */}
            <div className="font-mono-ui text-[12px] sm:text-[13px] text-[#8A8F9E] px-5 sm:px-6 pt-5">
              <span className="text-[#D4A24C]">$</span> git log --stat --author=ashwini
            </div>

            {/* Timeline */}
            <div className="px-5 sm:px-6 pt-4 pb-6">
              {educationData.map((item, i) => (
                <EducationCard
                  key={item.hash}
                  {...item}
                  index={i}
                  isLast={i === educationData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}