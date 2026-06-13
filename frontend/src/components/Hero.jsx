import React from "react";

const FLOATERS = [
  { emoji: "🤖", top: "15%", left: "5%", delay: "0s" },
  { emoji: "🧠", top: "25%", right: "6%", delay: "0.8s" },
  { emoji: "⚡", top: "60%", left: "3%", delay: "1.2s" },
  { emoji: "🔬", top: "70%", right: "4%", delay: "0.4s" },
  { emoji: "💡", top: "40%", left: "92%", delay: "1.6s" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Workshop hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/3 blur-3xl" />
      </div>

      {FLOATERS.map(({ emoji, delay, ...pos }) => (
        <span
          key={emoji}
          aria-hidden="true"
          className="absolute text-3xl sm:text-4xl animate-float select-none hidden sm:block"
          style={{ ...pos, animationDelay: delay }}
        >
          {emoji}
        </span>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse-slow" />
          Enrollments Open — Summer 2026
        </div>

        <h1
          className="font-display font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          AI &amp; Robotics
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F59E0B 0%, #F43F5E 50%, #06B6D4 100%)",
            }}
          >
            Summer Workshop
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Empower your child to build, code, and innovate. A hands-on 4-week
          online journey into the world of Artificial Intelligence and Robotics —
          designed for curious minds aged 8–14.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 bg-brand-amber text-gray-900 font-bold text-base px-8 py-4 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl active:scale-100 transition-all duration-200"
          >
            Enroll Now — ₹2,999 🚀
          </a>
          <a
            href="#details"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/25 transition-all duration-200"
          >
            View Details ↓
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="mt-2 flex flex-wrap justify-center gap-6 text-sm text-white/70 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: "📅", text: "Starts 15 July 2026" },
            { icon: "🌐", text: "100% Online" },
            { icon: "👦", text: "Ages 8–14" },
            { icon: "⏱", text: "4 Weeks" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0"
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
