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
  { href: "https://github.com/Ansh1760", icon: <Github size={16} /> },
  { href: "https://linkedin.com/in/infoashwini", icon: <Linkedin size={16} /> },
  { href: "https://x.com/AnshTripathi60", icon: <Twitter size={16} /> },
  { href: "https://instagram.com/ansh.jsx", icon: <Instagram size={16} /> },
  { href: "https://leetcode.com/u/HmeWhwAXEd/", icon: <Code size={16} /> },
];

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay Card */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-80 rounded-2xl shadow-2xl p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition"
            >
              <X size={16} />
            </button>

            {/* Profile */}
            <div className="flex flex-col items-center text-center space-y-3">
              <img
                src={profileImg}
                alt="Ashwini"
                className="w-20 h-20 rounded-xl object-cover object-top border border-violet-200"
              />

              <div>
                <h3 className="font-semibold text-gray-800">
                  Ashwini Tripathi
                </h3>
                <p className="text-sm text-violet-500 font-medium">
                  Full Stack Developer
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={12} className="text-violet-400" />
                Lucknow, India
              </div>

              <div className="w-full h-px bg-gray-100 my-2" />

              {/* Social Icons */}
              <div className="grid grid-cols-5 gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg
                    bg-gray-50 border border-gray-200 text-gray-500
                    hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600
                    transition-all duration-200"
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
      <footer className="bg-white border-t border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Avatar Trigger */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group"
          >
            <img
              src={profileImg}
              alt="Ashwini"
              className="w-9 h-9 rounded-lg object-cover object-top border border-violet-200 group-hover:border-violet-400 transition"
            />
            <span className="text-sm font-medium text-gray-600 group-hover:text-violet-600 transition">
              Ashwini Tripathi
            </span>
          </button>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Ashwini
          </p>

        </div>
      </footer>
    </>
  );
}