import { useState } from "react";
import {
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Code,
  Twitter,
  X,
} from "lucide-react";
import profileImg from "../assets/home.jpeg";

const socials = [
  { href: "https://github.com/Ansh1760", icon: <Github size={16} />, accent: "#ECEAE3" },
  { href: "https://linkedin.com/in/infoashwini", icon: <Linkedin size={16} />, accent: "#6EC9B8" },
  { href: "https://x.com/AnshTripathi60", icon: <Twitter size={16} />, accent: "#6EC9B8" },
  { href: "https://instagram.com/ansh.jsx", icon: <Instagram size={16} />, accent: "#E06C75" },
  { href: "https://leetcode.com/u/HmeWhwAXEd/", icon: <Code size={16} />, accent: "#D4A24C" },
];

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes footer-fade-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .footer-fade-in { animation: footer-fade-in 0.18s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .footer-fade-in { animation: none; }
        }
      `}</style>

      {/* Overlay Card */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/70 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="footer-fade-in w-80 border border-[#232937] bg-[#131826] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* title bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#232937]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A24C]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EC9B8]/70" />
              <span className="font-mono-ui text-[11px] text-[#8A8F9E] ml-2">whoami</span>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-[#5C6272] hover:text-[#ECEAE3] transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="relative w-16 h-16">
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#D4A24C]" />
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#D4A24C]" />
                <img
                  src={profileImg}
                  alt="Ashwini"
                  className="w-full h-full object-cover object-top border border-[#232937]"
                />
              </div>

              <div>
                <h3 className="font-display text-[#ECEAE3] text-[1.05rem] leading-snug">
                  Ashwini Tripathi
                </h3>
                <p className="font-mono-ui text-[12px] text-[#6EC9B8] mt-0.5">
                  Full Stack Developer
                </p>
              </div>

              <div className="font-mono-ui flex items-center gap-1.5 text-[11px] text-[#8A8F9E]">
                <MapPin size={12} className="text-[#D4A24C]" />
                Lucknow, India
              </div>

              <div className="w-full h-px border-t border-dashed border-[#232937] my-1" />

              {/* Social Icons */}
              <div className="grid grid-cols-5 gap-2 w-full">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-9 flex items-center justify-center border border-[#232937] bg-[#0B0F19] text-[#8A8F9E] transition-colors duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = s.accent;
                      e.currentTarget.style.color = s.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#232937";
                      e.currentTarget.style.color = "#8A8F9E";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar */}
      <footer className="font-body bg-[#0B0F19] border-t border-[#232937] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Avatar Trigger */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 shrink-0 border border-[#232937] group-hover:border-[#D4A24C] transition-colors">
              <img
                src={profileImg}
                alt="Ashwini"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-mono-ui text-[12.5px] text-[#8A8F9E] group-hover:text-[#ECEAE3] transition-colors">
              ~/ashwini
            </span>
          </button>

          {/* Copyright */}
          <p className="font-mono-ui text-[11.5px] text-[#5C6272]">
            <span className="text-[#D4A24C]">$</span> echo "© {new Date().getFullYear()} Ashwini"
          </p>
        </div>
      </footer>
    </>
  );
}