import React, { useState } from "react";

const FAQS = [
  {
    question: "Do students need prior coding experience?",
    answer:
      "Not at all! The workshop is designed for complete beginners. We start with visual block-based coding before introducing any text-based programming. All you need is curiosity and a device with an internet connection.",
  },
  {
    question: "Will the sessions be recorded?",
    answer:
      "Yes. Every live session is recorded and made available within 24 hours. Recordings are accessible for 30 days after the workshop ends, so students can revisit lessons at their own pace.",
  },
  {
    question: "What software or hardware is required?",
    answer:
      "Only a laptop or desktop computer with a stable internet connection and a modern browser (Chrome or Firefox recommended). All tools are browser-based — no downloads, no physical robotics kits needed.",
  },
  {
    question: "How many hours per week does the workshop require?",
    answer:
      "Each week includes two 90-minute live sessions plus one optional 45-minute Q&A. We recommend setting aside 4–5 hours per week for sessions, project work, and self-study.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. We offer a full refund within 7 days of enrollment if you change your mind. After the workshop starts, a 50% refund is available before the end of Week 1.",
  },
  {
    question: "Will my child receive a certificate?",
    answer:
      "Every student who completes the program and submits their capstone project receives a verified digital certificate they can share on school portfolios or social profiles.",
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-display font-700 text-gray-900 text-sm sm:text-base">
          {question}
        </span>
        {/* Animated chevron */}
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-brand-violet/10 flex items-center justify-center text-brand-violet transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={id}
        role="region"
        aria-labelledby={`faq-q-${index}`}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-violet font-semibold text-sm uppercase tracking-widest mb-2">
            FAQs
          </p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-gray-900">
            Common questions answered
          </h2>
          <p className="mt-3 text-gray-500">
            Can't find what you're looking for? Reach out via the registration
            form below.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} index={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
