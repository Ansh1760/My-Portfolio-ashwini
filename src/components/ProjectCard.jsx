function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-sky-400 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-slate-300 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          className="text-sky-400 hover:underline text-sm"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          className="text-sky-400 hover:underline text-sm"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
