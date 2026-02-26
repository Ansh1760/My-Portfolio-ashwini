import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import byteboundImg from "../assets/Byteboundbanner.png";
import project2 from "../assets/bgremove.png";
import project3 from "../assets/project3.png";

function Projects() {
  const projects = [
    {
      title: "ByteBound Website",
      description:
        "A modern digital agency website built using React and TailwindCSS, focused on performance and clean UI/UX.",
      live: "https://www.bytebound.in/",
      image: byteboundImg,
    },
    {
      title: "BG Remover",
      description:
        "AI-based background removal tool with modern UI and optimized speed for real-time image processing.",
      live: "https://bgremoverbyansh.netlify.app/",
      image: project2,
    },
    {
      title: "To Do List",
      description:
        "Responsive task management app allowing users to add, complete, and delete tasks efficiently.",
      live: "https://mytaskansh.netlify.app/",
      image: project3,
    },
   
  ];

  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
        
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Projects<span className="text-violet-600">.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that reflect my problem-solving approach,
            strong fundamentals, and hands-on development experience.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-3xl border border-gray-200 bg-white
                shadow-sm hover:shadow-xl transition-all duration-300
                hover:-translate-y-2 flex flex-col overflow-hidden h-full">

                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-violet-600 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2
                      px-4 py-2 rounded-lg text-sm font-semibold
                      bg-violet-600 text-white
                      hover:bg-violet-700 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Projects;