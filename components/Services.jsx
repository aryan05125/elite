"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Automation",
    desc: "Intelligent workflows and automation systems that eliminate repetitive operations and improve efficiency.",
  },
  {
    title: "Generative AI Solutions",
    desc: "Custom LLM applications, AI assistants, and enterprise-grade generative AI platforms.",
  },
  {
    title: "AI Agents Development",
    desc: "Autonomous AI agents capable of reasoning, decision-making, and multi-step task execution.",
  },
  {
    title: "Business Process Automation",
    desc: "End-to-end AI systems that optimize operations, customer support, sales, and internal workflows.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="section-title">AI Services</h2>

          <p className="section-subtitle">
            Powerful AI solutions designed to automate operations,
            accelerate growth, and unlock intelligent business systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;