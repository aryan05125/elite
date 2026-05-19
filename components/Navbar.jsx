"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
      <div className="container-custom h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Elite<span className="text-blue-500">AI</span>
        </h1>

        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#case">Case Studies</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;