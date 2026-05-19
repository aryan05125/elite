"use client";

const blogs = [
  {
    title: "How AI Automation is Transforming Businesses",
    desc: "Discover how intelligent automation is helping companies reduce costs and scale operations faster.",
    date: "May 2026",
  },
  {
    title: "Future of AI Agents in Modern Companies",
    desc: "AI agents are changing the way businesses handle workflows, decisions, and customer support.",
    date: "May 2026",
  },
  {
    title: "Building Scalable AI Infrastructure",
    desc: "Learn how scalable AI systems are built using modern cloud and intelligent architectures.",
    date: "May 2026",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-32">
      <div className="container-custom">

        <div className="text-center">
          <h2 className="section-title">Latest Blogs</h2>

          <p className="section-subtitle">
            Insights, AI trends, automation strategies,
            and future technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="h-52 bg-gradient-to-r from-blue-700/30 to-violet-700/30"></div>

              <div className="p-8">
                <p className="text-sm text-blue-400">
                  {blog.date}
                </p>

                <h3 className="text-2xl font-semibold mt-4">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {blog.desc}
                </p>

                <button className="mt-8 text-blue-400 hover:text-blue-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Blog;