"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    path: "/admin",
  },
  {
    name: "Services",
    path: "/admin/services",
  },
  {
    name: "Case Studies",
    path: "/admin/case-studies",
  },
  {
    name: "Blogs",
    path: "/admin/blogs",
  },
  {
    name: "Why Choose Us",
    path: "/admin/why-choose",
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-[#020817] p-8">

      <h1 className="text-4xl font-bold mb-14">
        Elite<span className="text-blue-500">AI</span>
      </h1>

      <div className="flex flex-col gap-4">

        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`p-4 rounded-2xl transition-all duration-300 ${
              pathname === link.path
                ? "bg-gradient-to-r from-blue-600 to-violet-600"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {link.name}
          </Link>
        ))}

      </div>

    </aside>
  );
};

export default AdminSidebar;