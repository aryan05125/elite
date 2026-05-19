"use client";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 py-10"
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">

        <h1 className="text-2xl font-bold">
          Elite<span className="text-blue-500">AI</span>
        </h1>

        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Services</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;