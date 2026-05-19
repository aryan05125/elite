"use client";

const caseStudies = [
  {
    title: "AI Sales Automation",
    desc: "Reduced manual sales operations and improved lead handling with intelligent automation systems.",
    result: "+240% Efficiency",
  },
  {
    title: "Enterprise AI Assistant",
    desc: "Built a custom AI knowledge assistant that automated internal workflows and team support operations.",
    result: "-70% Support Load",
  },
  {
    title: "AI Process Optimization",
    desc: "Implemented AI-powered workflow systems to optimize business operations across multiple departments.",
    result: "3x Faster Operations",
  },
];

const CaseStudies = () => {
  return (
    <section id="case" className="py-32">
      <div className="container-custom">

        <div className="text-center">
          <h2 className="section-title">Case Studies</h2>

          <p className="section-subtitle">
            Real AI impact with measurable business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {item.desc}
              </p>

              <h4 className="text-cyan-400 text-3xl font-bold mt-8">
                {item.result}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;