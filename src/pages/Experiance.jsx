function Experience() {
  const ExperienceCard = ({ title, duration, children }) => (
    <div className="relative pl-8 pb-12 border-l-2 border-violet-200">
      
      {/* Dot */}
      <div className="absolute -left-[10px] top-1 w-5 h-5 bg-violet-600 rounded-full border-4 border-white shadow" />

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-sm text-violet-600 font-medium mt-1">
        {duration}
      </p>

      <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-3xl">
        {children}
      </p>
    </div>
  );

  return (
    <section
      id="experience"
      className="w-full bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50 py-24 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Experience<span className="text-violet-600">.</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Professional roles, leadership experiences, and practical exposure.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">

          <ExperienceCard
            title="Co-Founder — ByteBound"
            duration="2024 – Present"
          >
            Co-founded ByteBound and built modern web solutions for individuals
            and organizations. Managed requirements gathering, development,
            deployment, and client communication.
          </ExperienceCard>

          <ExperienceCard
            title="Media & Web Management — DCSE Department, SRMU"
            duration="2025 – Present"
          >
            Managing digital media and departmental web presence. Designing,
            updating, and maintaining official platforms while coordinating with
            faculty and internal teams.
          </ExperienceCard>

          <ExperienceCard
            title="Freelance / Independent Web Developer"
            duration="Ongoing"
          >
            Developed responsive, performance-focused websites for clients.
            Delivered complete solutions from design to deployment.
          </ExperienceCard>

          <ExperienceCard
            title="Smart India Hackathon (SIH) 2025 — Participant"
            duration="2025"
          >
            Shortlisted in the internal round. Collaborated in a team to analyze
            problem statements and propose structured, scalable solutions under
            time constraints.
          </ExperienceCard>

        </div>

      </div>
    </section>
  );
}

export default Experience;