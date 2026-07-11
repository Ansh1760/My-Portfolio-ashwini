import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "home", href: "#home" },
    { label: "education", href: "#education" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* GLASS CONTAINER */}
          <div
            className={`font-mono-ui flex items-center justify-between px-6 rounded-xl transition-all duration-500 ${
              scrolled
                ? "bg-[#0B0F19]/80 backdrop-blur-xl shadow-lg border border-[#232937]"
                : "bg-[#0B0F19]/40 backdrop-blur-lg border border-[#232937]/60"
            }`}
          >
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="py-3 flex items-baseline gap-0.5"
            >
              <span className="text-[15px] sm:text-base font-medium text-[#ECEAE3]">
                ashwini
              </span>
              <span className="text-[15px] sm:text-base text-[#D4A24C]">@</span>
              <span className="text-[15px] sm:text-base text-[#6EC9B8]">dev</span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative group text-[13px] text-[#8A8F9E] transition-colors"
                >
                  <span className="text-[#5C6272] group-hover:text-[#D4A24C] transition-colors">
                    ~/
                  </span>
                  <span className="group-hover:text-[#ECEAE3] transition-colors">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#D4A24C] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#131826] border border-[#232937] hover:border-[#D4A24C] transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#ECEAE3]" />
              ) : (
                <Menu className="w-5 h-5 text-[#ECEAE3]" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 px-4 mt-3 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="font-mono-ui max-w-[1400px] mx-auto rounded-xl bg-[#131826] border border-[#232937] shadow-lg py-2 overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-1.5 px-6 py-3 text-[13px] text-[#8A8F9E] hover:bg-[#0B0F19] hover:text-[#ECEAE3] transition-colors"
              >
                <span className="text-[#D4A24C]">$</span> cd ~/{item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#0B0F19]/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;