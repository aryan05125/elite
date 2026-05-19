"use client";

import {
  FaBolt,
  FaBrain,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

const items = [
  {
    icon: <FaBolt />,
    title: "Fast Execution",
    desc: "Rapid development cycles with enterprise-level quality.",
  },
  {
    icon: <FaBrain />,
    title: "Deep AI Expertise",
    desc: "Advanced experience across AI systems, automation, and modern architectures.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Standards",
    desc: "Premium quality solutions designed for worldwide businesses.",
  },
  {
    icon: <FaRocket />,
    title: "Scalable Systems",
    desc: "Infrastructure built for growth, performance, and future expansion.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-32">
      <div className="container-custom">

        <div className="text-center">
          <h2 className="section-title">Why Choose Us</h2>

          <p className="section-subtitle">
            Combining deep AI expertise with elite execution quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-2xl mx-auto">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;