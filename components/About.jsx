"use client";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="glass-card p-10">
            <h2 className="text-5xl font-bold leading-tight">
              Built for the AI Future
            </h2>

            <p className="text-gray-400 mt-8 leading-relaxed">
              An elite AI company from India with a global vision.
              Focused on building intelligent systems that help
              businesses scale faster through AI innovation.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Combining advanced engineering, automation expertise,
              and modern AI architecture to create world-class
              digital intelligence platforms.
            </p>
          </div>

          <div className="glass-card p-10">
            <h2 className="text-5xl font-bold leading-tight">
              Innovation. Speed. Intelligence.
            </h2>

            <p className="text-gray-400 mt-8 leading-relaxed">
              Every solution is designed with premium engineering
              standards, scalable infrastructure, and futuristic
              AI capabilities.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              From startups to enterprises, intelligent systems
              are built to create measurable business transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;