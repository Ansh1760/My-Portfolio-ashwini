import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* GLASS CONTAINER */}
          <div
            className={`flex items-center justify-between px-6 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-white/40 backdrop-blur-2xl shadow-lg border border-white/30"
                : "bg-white/20 backdrop-blur-xl border border-white/20"
            }`}
          >
            
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="select-none py-3"
            >
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight
              bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600
              bg-clip-text text-transparent">
                Ashwini
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-gray-800 font-medium
                  hover:text-violet-600 transition-colors duration-300"
                >
                  {item.label}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-violet-600 to-indigo-600
                    transition-all duration-300 group-hover:w-full"
                  />
                </a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl
              bg-white/30 backdrop-blur-xl border border-white/40
              hover:bg-white/50 transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 px-6 mt-3 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl bg-white/50 backdrop-blur-2xl border border-white/30 shadow-lg py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-6 py-3 text-gray-800 font-medium
                hover:bg-violet-50 hover:text-violet-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;