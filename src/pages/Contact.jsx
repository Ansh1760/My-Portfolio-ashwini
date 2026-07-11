import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Twitter,
  Instagram,
  Code,
} from "lucide-react";
import profileImg from "../assets/home.jpeg";

const socials = [
  { link: "https://github.com/Ansh1760", label: "github", accent: "#ECEAE3", Icon: Github },
  { link: "https://linkedin.com/in/infoashwini", label: "linkedin", accent: "#6EC9B8", Icon: Linkedin },
  { link: "https://twitter.com/AnshTripathi60", label: "twitter", accent: "#6EC9B8", Icon: Twitter },
  { link: "https://instagram.com/ansh.jsx", label: "instagram", accent: "#E06C75", Icon: Instagram },
  { link: "https://leetcode.com/u/HmeWhwAXEd/", label: "leetcode", accent: "#D4A24C", Icon: Code },
];

function Contact() {
  const whatsappNumber = "919696901760";

  const whatsappMessage = encodeURIComponent(
    "Hi Ashwini, I visited your portfolio and would like to connect regarding an opportunity."
  );

  const emailSubject = encodeURIComponent("Opportunity Discussion");
  const emailBody = encodeURIComponent(
    "Hi Ashwini,\n\nI came across your portfolio and would like to discuss a potential opportunity.\n\nBest regards,"
  );

  return (
    <section id="contact" className="font-body bg-[#0B0F19] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* faint grid texture, matches the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ECEAE3 1px, transparent 1px), linear-gradient(90deg, #ECEAE3 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="max-w-[1000px] mx-auto relative">
        {/* HEADER */}
        <div className="mb-14 sm:mb-16">
          <p className="font-mono-ui text-xs tracking-[0.1em] uppercase text-[#6EC9B8] mb-2">
            {"> get in touch"}
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-[#ECEAE3] font-normal mb-3 leading-tight">
            Let's Connect<span className="text-[#D4A24C]">.</span>
          </h2>
          <div className="w-10 h-px bg-[#232937]" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            {/* whoami panel */}
            <div className="border border-[#232937] bg-[#131826]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#232937]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A24C]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#6EC9B8]/70" />
                <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">whoami</span>
              </div>

              <div className="p-5 flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0">
                  <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#D4A24C]" />
                  <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#D4A24C]" />
                  <img
                    src={profileImg}
                    alt="Ashwini"
                    className="w-full h-full object-cover border border-[#232937]"
                  />
                </div>

                <div className="font-mono-ui text-[12.5px] leading-relaxed">
                  <p className="font-display text-[#ECEAE3] text-[1rem] mb-0.5">Ashwini Tripathi</p>
                  <p className="text-[#8A8F9E]">Full Stack Developer</p>
                  <p className="flex items-center gap-1.5 text-[#6EC9B8] mt-1">
                    <MapPin size={12} />
                    Lucknow, India
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-ui flex items-center justify-center gap-2 py-2.5 text-sm border border-[#232937] text-[#ECEAE3] hover:border-[#6EC9B8] hover:text-[#6EC9B8] transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href={`mailto:tripathiansh1760@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                className="font-mono-ui flex items-center justify-center gap-2 py-2.5 text-sm bg-[#D4A24C] text-[#0B0F19] font-medium hover:bg-[#e0b264] transition-colors"
              >
                <Mail size={15} />
                Email
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono-ui text-[11px] text-[#5C6272] mb-2">
                <span className="text-[#D4A24C]">$</span> ls socials/
              </p>
              <div className="grid grid-cols-5 gap-2">
                {socials.map(({ link, label, accent, Icon }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="flex items-center justify-center h-12 border border-[#232937] bg-[#131826] text-[#8A8F9E] transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accent;
                      e.currentTarget.style.color = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#232937";
                      e.currentTarget.style.color = "#8A8F9E";
                    }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — connect.sh */}
          <div className="border border-[#232937] bg-[#131826] flex flex-col">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#232937]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A24C]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EC9B8]/70" />
              <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">connect.sh</span>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <p className="font-mono-ui text-[12.5px] text-[#8A8F9E] mb-4">
                  <span className="text-[#D4A24C]">$</span> ./connect.sh --status
                </p>

                <h3 className="font-display text-[#ECEAE3] text-[1.5rem] mb-3 leading-snug">
                  Ready to build something impactful?
                </h3>

                <p className="font-mono-ui text-[12.5px] text-[#8A8F9E] leading-relaxed">
                  Whether it's a web application, AI project, or collaboration —
                  open to working on meaningful ideas and scalable solutions.
                </p>
              </div>

              <div className="font-mono-ui text-[12px] mt-8 pt-4 border-t border-dashed border-[#232937] flex flex-col gap-1.5">
                <p>
                  <span className="text-[#5C6272]">{">"} status</span>{" "}
                  <span className="text-[#6EC9B8]">accepting new projects</span>
                </p>
                <p>
                  <span className="text-[#5C6272]">{">"} response_time</span>{" "}
                  <span className="text-[#6EC9B8]">~24h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;