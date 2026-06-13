import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#details" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQ", href: "#faq" },
  { label: "Enroll", href: "#register" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow when user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white
        ${scrolled ? "bg-purple-500/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a href="#" className="font-display font-900 text-xl" aria-label="Home">
          <span className="text-brand-violet">AI</span>
          <span className="text-brand-cyan">Bots</span>
          <span className="text-brand-amber">Workshop</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-brand-violet transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button — desktop */}
        <a
          href="#register"
          className={`hidden md:inline-flex items-center gap-2 bg-brand-violet text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-brand-indigo transition-colors duration-200 shadow-md hover:shadow-lg ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md text-purple-500" : "bg-purple-500/90 backdrop-blur-md shadow-md"}`}
        >
          Enroll Now 🚀
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span
            className={`block w-5 h-0.5 bg-current mb-1 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 pt-2 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 font-medium hover:text-brand-violet transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex justify-center items-center bg-brand-violet text-white font-semibold py-2.5 rounded-full hover:bg-brand-indigo transition-colors"
          >
            Enroll Now 🚀
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
