import React from "react";

/* ---------- Education Card ---------- */
const EducationCard = ({ year, title, place, score, details }) => (
  <div className="relative pl-10 pb-14 border-l-2 border-violet-200">

    {/* Dot */}
    <div className="absolute -left-[11px] top-2 w-5 h-5 bg-violet-600 rounded-full border-4 border-white shadow" />

    {/* Year Badge */}
    <span className="inline-block text-xs font-medium bg-violet-100 text-violet-600 px-3 py-1 rounded-full mb-3">
      {year}
    </span>

    <h4 className="text-lg font-semibold text-gray-900">
      {title}
    </h4>

    <p className="text-sm text-gray-600 mt-1">
      {place}
    </p>

    <p className="text-sm font-semibold text-violet-600 mt-2">
      {score}
    </p>

    {details && (
      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
        {details}
      </p>
    )}
  </div>
);

export default function About() {
  return (
    <section
      id="education"
      className="w-full bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50 py-28 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Education<span className="text-violet-600">.</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Academic journey and continuous learning foundation in Computer Science.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">

          <EducationCard
            year="2023 – 2027"
            title="B.Tech - Computer Science Engineering"
            place="Shri Ramwaroop Memorial University, Lucknow"
            score="CGPA: 7.8"
            details="Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks."
          />

          <EducationCard
            year="2022 – 2023"
            title="Intermediate"
            place="Sardar Patel Inter College, Kaiserganj Bahraich"
           
            details="Completed higher secondary education with focus on Mathematics and Science."
          />

          <EducationCard
            year="2020 – 2021"
            title="High School"
            place="Pt. Ram Naresh Inter College, Bahraich"
            
            details="Strong academic foundation with consistent performance."
          />

        </div>

      </div>
    </section>
  );
}