import React, { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    title: "Co-Founder — ByteBound",
    duration: "2024 – Present",
    type: "Startup",
    description:
      "Co-founded ByteBound and built modern web solutions for individuals and organizations. Managed requirements gathering, development, deployment, and client communication.",
  },
  {
    title: "Media & Web Management — DCSE Dept, SRMU",
    duration: "2025 – Present",
    type: "Institution",
    description:
      "Managing digital media and departmental web presence. Designing, updating, and maintaining official platforms while coordinating with faculty and internal teams.",
  },
  {
    title: "Freelance Web Developer",
    duration: "Ongoing",
    type: "Freelance",
    description:
      "Developed responsive, performance-focused websites for clients. Delivered complete solutions from design to deployment.",
  },
  {
    title: "Smart India Hackathon (SIH) 2025 — Participant",
    duration: "2025",
    type: "Event",
    description:
      "Shortlisted in the internal round. Collaborated in a team to analyze problem statements and propose structured, scalable solutions under time constraints.",
  },
];

const ExperienceCard = ({
  title,
  duration,
  type,
  description,
  index,
  isLast,
  isMobile,
}) => {
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
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "2rem",
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease ${
          index * 0.15
        }s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Duration */}
      <div
        style={{
          minWidth: isMobile ? "100%" : "110px",
          textAlign: isMobile ? "left" : "right",
          paddingTop: "3px",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#999",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          {duration}
        </span>
      </div>

      {/* Timeline */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#111",
              marginTop: "6px",
              flexShrink: 0,
            }}
          />

          {!isLast && (
            <div
              style={{
                width: "1px",
                flex: 1,
                background: "#e0e0dc",
                marginTop: "6px",
              }}
            />
          )}
        </div>
      )}

      {/* Card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e8e4",
          borderRadius: "4px",
          padding: isMobile ? "1rem" : "1.1rem 1.4rem",
          flex: 1,
          marginBottom: isLast ? 0 : "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <h4
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#111",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {title}
          </h4>

          <span
            style={{
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
            }}
          >
            {type}
          </span>
        </div>

        <p
          style={{
            fontSize: isMobile ? "0.78rem" : "0.82rem",
            color: "#888",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginTop: "10px",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');
        `}
      </style>

      <section
        id="experience"
        style={{
          background: "#fafaf8",
          padding: isMobile ? "4rem 1rem" : "5rem 2rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          <div style={{ marginBottom: isMobile ? "2.5rem" : "3.5rem" }}>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#aaa",
                marginBottom: "0.5rem",
                fontWeight: 400,
              }}
            >
              Work & Exposure
            </p>

            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#111",
                fontWeight: 400,
                margin: "0 0 0.75rem",
                lineHeight: 1.1,
              }}
            >
              Experience
            </h2>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#ccc",
              }}
            />
          </div>

          {/* Timeline */}
          <div>
            {experienceData.map((item, i) => (
              <ExperienceCard
                key={i}
                {...item}
                index={i}
                isLast={i === experienceData.length - 1}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}