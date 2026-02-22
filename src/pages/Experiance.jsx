function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white text-gray-900 px-6 py-20 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 tracking-tight">
          Experience
        </h2>

        {/* EXPERIENCE 1 */}
        <div className="border-l-2 border-violet-500 pl-6 mb-12">
          <h3 className="text-xl font-semibold">
            Co-Founder — ByteBound
          </h3>
          <p className="text-violet-600 text-sm mb-3">
            2024 – Present
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Co-founded ByteBound and worked on building and delivering modern web
            solutions. Developed and deployed websites for multiple individuals
            and organizations, handling requirements, development, and delivery.
          </p>
        </div>

        {/* EXPERIENCE 2 */}
        <div className="border-l-2 border-violet-500 pl-6 mb-12">
          <h3 className="text-xl font-semibold">
            Media & Web Management — DCSE Department, SRMU
          </h3>
          <p className="text-violet-600 text-sm mb-3">
            2025 – Present
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Managing digital media and web presence for the DCSE department at
            SRMU. Designing, updating, and maintaining departmental websites
            while coordinating with faculty and teams.
          </p>
        </div>

        {/* EXPERIENCE 3 */}
        <div className="border-l-2 border-violet-500 pl-6 mb-12">
          <h3 className="text-xl font-semibold">
            Freelance / Independent Web Developer
          </h3>
          <p className="text-violet-600 text-sm mb-3">
            Ongoing
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Built websites for multiple clients based on their requirements.
            Delivered responsive, clean, and performance-focused solutions from
            design to deployment.
          </p>
        </div>

        {/* EXPERIENCE 4 */}
        <div className="border-l-2 border-violet-500 pl-6">
          <h3 className="text-xl font-semibold">
            Smart India Hackathon (SIH) 2025 — Participant
          </h3>
          <p className="text-violet-600 text-sm mb-3">
            2025
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Participated in Smart India Hackathon 2025 and got shortlisted in the
            internal round. Worked in a team to analyze problem statements and
            propose structured solutions under time constraints.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
