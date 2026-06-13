import React from "react";

const DETAILS = [
  {
    icon: "👦",
    label: "Age Group",
    value: "8 – 14 Years",
    bg: "from-violet-100 to-violet-50",
    accent: "text-brand-violet",
  },
  {
    icon: "📅",
    label: "Duration",
    value: "4 Weeks",
    bg: "from-cyan-100 to-cyan-50",
    accent: "text-brand-cyan",
  },
  {
    icon: "🌐",
    label: "Mode",
    value: "Online (Live)",
    bg: "from-indigo-100 to-indigo-50",
    accent: "text-brand-indigo",
  },
  {
    icon: "💰",
    label: "Fee",
    value: "₹2,999",
    bg: "from-amber-100 to-amber-50",
    accent: "text-brand-amber",
  },
  {
    icon: "🚀",
    label: "Start Date",
    value: "15 July 2026",
    bg: "from-rose-100 to-rose-50",
    accent: "text-brand-rose",
  },
];

const DetailCard = ({ icon, label, value, bg, accent }) => (
  <article
    className={`bg-gradient-to-br ${bg} rounded-2xl p-6 flex flex-col items-center text-center gap-3
      shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
  >
    <span className="text-4xl" role="img" aria-hidden="true">
      {icon}
    </span>
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
      {label}
    </p>
    <p className={`font-display font-800 text-xl ${accent}`}>{value}</p>
  </article>
);

const WorkshopDetails = () => {
  return (
    <section
      id="details"
      aria-label="Workshop details"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand-violet font-semibold text-sm uppercase tracking-widest mb-2">
            Workshop Info
          </p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-gray-900">
            Everything you need to know
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            A structured, expert-led program that makes AI and robotics
            accessible, fun, and hands-on for every young learner.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {DETAILS.map((d) => (
            <DetailCard key={d.label} {...d} />
          ))}
        </div>

        {/* Description blurb */}
        <div className="mt-14 bg-gradient-to-br from-brand-violet/5 to-brand-cyan/5 rounded-3xl p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display font-800 text-2xl text-gray-900 mb-4">
              Why this workshop?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The world is changing fast. AI and robotics are no longer just
              for engineers — they're tools every future creator needs. Our
              curriculum blends conceptual learning with hands-on projects so
              kids leave with real skills, real confidence, and something
              genuinely cool to show off.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Live, interactive sessions every week",
              "Project-based learning with guided mentors",
              "Certificate of completion for every student",
              "Recorded sessions available for 30 days",
              "Small batch — maximum 25 students",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-mint/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-brand-mint" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
