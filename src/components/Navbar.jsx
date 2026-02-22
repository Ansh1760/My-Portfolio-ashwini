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
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
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
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-3 border-b border-white/30"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
{/* LOGO */}
{/* LOGO */}
<a
  href="#home"
  onClick={(e) => handleNavClick(e, "#home")}
  className="select-none"
>
  <span
    className="
    text-2xl sm:text-3xl lg:text-4xl
    font-extrabold tracking-tight
    bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600
    bg-clip-text text-transparent
    hover:tracking-wide transition-all duration-300
    "
  >
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
                  className="relative text-gray-700 font-medium
                  hover:text-violet-600 transition-colors"
                >
                  {item.label}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-violet-600 to-indigo-600
                    transition-all duration-300 hover:w-full"
                  />
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2 rounded-full text-sm font-semibold
                bg-violet-600 text-white
                hover:bg-violet-700 hover:shadow-lg
                transition-all"
              >
                Download resume
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg
              bg-white/60 backdrop-blur-md border border-white/40
              hover:bg-white/80 transition"
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
          className={`md:hidden absolute top-full left-0 right-0
          backdrop-blur-xl bg-white/80
          border-t border-white/30
          shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-xl
                text-gray-800 font-medium
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
