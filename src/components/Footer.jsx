import profileImg from "../assets/profile.jpeg";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-gradient-to-br from-violet-50 via-indigo-50 to-pink-50 border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-8 py-16">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Let’s connect
          </h2>

          {/* Message */}
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            Thanks for exploring my portfolio. I’m always open to meaningful
            conversations, collaborations, and new opportunities.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <a
              href="https://www.linkedin.com/in/infoashwini"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200
                group-hover:shadow-lg group-hover:-translate-y-1 transition">
                <FaLinkedin size={26} className="text-[#0A66C2]" />
              </div>
            </a>

            <a
              href="https://wa.me/919696901760"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200
                group-hover:shadow-lg group-hover:-translate-y-1 transition">
                <FaWhatsapp size={26} className="text-[#25D366]" />
              </div>
            </a>

            <a
              href="mailto:tripathiansh1760@gmail.com"
              className="group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200
                group-hover:shadow-lg group-hover:-translate-y-1 transition">
                <Mail size={26} className="text-[#EA4335]" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/ansh.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200
                group-hover:shadow-lg group-hover:-translate-y-1 transition">
                <FaInstagram size={26} className="text-[#E1306C]" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61581102417456"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 rounded-2xl bg-white shadow-md border border-gray-200
                group-hover:shadow-lg group-hover:-translate-y-1 transition">
                <FaFacebook size={26} className="text-[#1877F2]" />
              </div>
            </a>
          </div>
{/* Signature */}
<div className="mt-14 flex items-center gap-4">
  <div
    className="h-12 w-12 rounded-full overflow-hidden
    bg-gradient-to-r from-violet-600 to-indigo-600
    flex items-center justify-center shadow-md"
  >
    <img
      src={profileImg}
      alt="Ashwini Tripathi"
      className="h-full w-full object-cover"
    />
  </div>

  <div>
    <p className="font-semibold text-gray-900">Ashwini Tripathi</p>
    <p className="text-sm text-gray-500">Full Stack Developer</p>
  </div>
</div>

          {/* Divider */}
          <div className="mt-10 border-t border-gray-200" />

          {/* Copyright */}
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Ashwini Tripathi. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Back to Top Arrow */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-gradient-to-r from-violet-600 to-indigo-600
        text-white shadow-lg
        hover:scale-110 hover:shadow-xl
        transition"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}

export default Footer;
