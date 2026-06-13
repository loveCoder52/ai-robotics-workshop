import React from "react";

const OUTCOMES = [
  {
    number: "01",
    title: "Understand AI Fundamentals",
    description:
      "Grasp how machine learning, neural networks, and AI decision-making work through visuals, games, and real-world examples.",
    icon: "🧠",
    color: "brand-violet",
  },
  {
    number: "02",
    title: "Build Beginner Robotics Projects",
    description:
      "Assemble and program virtual robots using browser-based simulators — no hardware required to get started.",
    icon: "🤖",
    color: "brand-cyan",
  },
  {
    number: "03",
    title: "Code with Block & Text Languages",
    description:
      "Start with Scratch-style block coding, then graduate to basic Python — building the foundation for lifelong programming.",
    icon: "💻",
    color: "brand-indigo",
  },
  {
    number: "04",
    title: "Solve Real-World Challenges",
    description:
      "Work on mini-projects inspired by actual global problems: traffic flow, recycling sorting, language translation, and more.",
    icon: "🌍",
    color: "brand-amber",
  },
  {
    number: "05",
    title: "Sharpen Logic & Teamwork",
    description:
      "Develop structured thinking through debugging puzzles and collaborate in group projects that mimic real engineering teams.",
    icon: "🤝",
    color: "brand-rose",
  },
  {
    number: "06",
    title: "Showcase a Final Project",
    description:
      "Every student completes and presents a capstone AI/robotics project in the final week — their first portfolio piece.",
    icon: "🏆",
    color: "brand-mint",
  },
];

const OutcomeCard = ({ number, title, description, icon, color }) => (
  <article
    className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
  >
    {/* Accent corner */}
    <div
      className={`absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-2xl bg-${color}/10 transition-all duration-300 group-hover:bg-${color}/20`}
    />

    <div className="flex items-start gap-4">
      <span className="text-5xl flex-shrink-0" role="img" aria-hidden="true">
        {icon}
      </span>
      <div>
        <span className={`text-xs font-bold text-${color} uppercase tracking-widest`}>
          {number}
        </span>
        <h3 className="font-display font-800 text-2xl text-gray-900 mt-0.5 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </article>
);

const LearningOutcomes = () => {
  return (
    <section
      id="outcomes"
      aria-label="Learning outcomes"
      className="py-20 sm:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-violet font-semibold text-sm uppercase tracking-widest mb-2">
            What You'll Learn
          </p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-gray-900">
            Skills that last a lifetime
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Each session builds on the last, taking students from curious
            beginners to confident young innovators.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTCOMES.map((o) => (
            <OutcomeCard key={o.number} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
