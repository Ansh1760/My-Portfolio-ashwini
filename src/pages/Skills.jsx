import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiNetlify,
  SiVercel,
  SiRailway,
  SiRender,
  SiFramer,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import { Code2, Server, Wrench } from "lucide-react";

const SkillItem = ({ icon, label, color }) => (
  <div
    className="flex items-center gap-4 rounded-2xl px-4 py-3
    bg-white shadow-sm border border-gray-200
    hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <span className={`text-2xl ${color}`}>{icon}</span>
    <span className="text-sm font-semibold text-gray-800">{label}</span>
  </div>
);

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Full Stack Expertise<span className="text-violet-600">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
              <Code2 className="w-7 h-7 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              Frontend
            </h3>

            <div className="grid gap-3">
              <SkillItem icon={<FaReact />} label="React" color="text-sky-500" />
              <SkillItem icon={<SiJavascript />} label="JavaScript" color="text-yellow-500" />
              <SkillItem icon={<SiFramer />} label="Framer Motion" color="text-purple-600" />
              <SkillItem icon={<SiTailwindcss />} label="Tailwind CSS" color="text-cyan-500" />
              <SkillItem icon={<FaHtml5 />} label="HTML5" color="text-orange-500" />
              <SkillItem icon={<FaCss3Alt />} label="CSS3" color="text-blue-500" />
              <SkillItem icon={<SiVite />} label="Vite" color="text-purple-500" />
            </div>
          </div>

          {/* BACKEND */}
          <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-5">
              <Server className="w-7 h-7 text-violet-600" />
            </div>

            <h3 className="text-2xl font-bold text-violet-600 mb-2">
              Backend
            </h3>

            <div className="grid gap-3">
              <SkillItem icon={<FaNodeJs />} label="Node.js" color="text-green-600" />
              <SkillItem icon={<SiExpress />} label="Express.js" color="text-gray-700" />
              <SkillItem icon={<SiMongodb />} label="MongoDB" color="text-green-500" />
              <SkillItem icon={<SiMysql />} label="MySQL" color="text-blue-600" />
              <SkillItem icon={<SiPostgresql />} label="PostgreSQL" color="text-indigo-600" />
              <SkillItem icon={<span className="font-bold">API</span>} label="REST APIs" color="text-gray-700" />
            </div>
          </div>

          {/* TOOLS & DEPLOYMENT */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
              <Wrench className="w-7 h-7 text-orange-500" />
            </div>

            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Tools & Deployment
            </h3>

            <div className="grid gap-3">
              <SkillItem icon={<FaGitAlt />} label="Git" color="text-orange-600" />
              <SkillItem icon={<FaGithub />} label="GitHub" color="text-gray-800" />
              <SkillItem icon={<SiNetlify />} label="Netlify" color="text-teal-500" />
              <SkillItem icon={<SiVercel />} label="Vercel" color="text-black" />
              <SkillItem icon={<SiRailway />} label="Railway" color="text-purple-600" />
              <SkillItem icon={<SiRender />} label="Render" color="text-blue-600" />
              <SkillItem icon={<FaFigma />} label="Figma" color="text-pink-500" />
              <SkillItem icon={<FaDocker />} label="Docker (Basics)" color="text-sky-600" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;