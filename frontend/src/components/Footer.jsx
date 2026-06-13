import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p className="font-display font-800 text-lg text-white mb-2">
            <span className="text-brand-violet">AI</span>
            <span className="text-brand-cyan">Bots</span>
            <span className="text-brand-amber">Workshop</span>
          </p>
          <p className="text-sm leading-relaxed">
            Empowering the next generation of innovators through hands-on AI
            &amp; robotics education.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {[
              ["#details", "Workshop Details"],
              ["#outcomes", "Learning Outcomes"],
              ["#faq", "FAQs"],
              ["#register", "Register"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-sm mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>📧 hello@aibotsworkshop.in</li>
            <li>📞 +91 98765 00000</li>
            <li>🕐 Mon–Sat, 10 AM – 6 PM IST</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>© {year} AIBots Workshop. All rights reserved.</p>
        <p>Made with ❤️ for curious young minds across India</p>
      </div>
    </footer>
  );
};

export default Footer;
