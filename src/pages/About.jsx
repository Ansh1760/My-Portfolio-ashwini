import React, { useEffect, useRef } from "react";

const educationData = [
  {
    year: "2023 – 2027",
    title: "B.Tech — Computer Science Engineering",
    place: "Shri Ramwaroop Memorial University, Lucknow",
    score: "CGPA: 7.8",
    details: "Data Structures, DBMS, OS, Computer Networks.",
  },
  {
    year: "2022 – 2023",
    title: "Intermediate",
    place: "Sardar Patel Inter College, Bahraich",
    details: "Mathematics & Science focused.",
  },
  {
    year: "2020 – 2021",
    title: "High School",
    place: "Pt. Ram Naresh Inter College, Bahraich",
    details: "Strong academic foundation.",
  },
];

const EducationCard = ({ year, title, place, score, details, index }) => {
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
        gap: "2rem",
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Year column */}
      <div style={{ minWidth: "110px", textAlign: "right", paddingTop: "2px" }}>
        <span style={{
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#999",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
        }}>
          {year}
        </span>
      </div>

      {/* Center line + dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <div style={{
          width: "8px", height: "8px", borderRadius: "50%",
          background: "#111", marginTop: "5px", flexShrink: 0,
        }} />
        <div style={{ width: "1px", flex: 1, background: "#e0e0dc", marginTop: "6px" }} />
      </div>

      {/* Content */}
      <div style={{
        background: "#fff",
        border: "1px solid #e8e8e4",
        borderRadius: "4px",
        padding: "1.1rem 1.4rem",
        flex: 1,
        marginBottom: "1.5rem",
      }}>
        <h4 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.15rem",
          color: "#111",
          fontWeight: 400,
          margin: "0 0 4px",
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: "0.82rem",
          color: "#888",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          margin: "0 0 2px",
        }}>
          {place}
        </p>
        {score && (
          <p style={{
            fontSize: "0.8rem",
            color: "#555",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            margin: "6px 0 0",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <span style={{
              display: "inline-block", width: "6px", height: "6px",
              background: "#111", borderRadius: "50%",
            }} />
            {score}
          </p>
        )}
        {details && (
          <p style={{
            fontSize: "0.8rem",
            color: "#aaa",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginTop: "8px",
            lineHeight: 1.6,
          }}>
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="education"
        style={{
          background: "#fafaf8",
          padding: "5rem 2rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>

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
              Background
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#111",
              fontWeight: 400,
              margin: "0 0 0.75rem",
              lineHeight: 1.1,
            }}>
              Education
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#ccc" }} />
          </div>

          {/* Timeline */}
          <div>
            {educationData.map((item, i) => (
              <EducationCard key={i} {...item} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}