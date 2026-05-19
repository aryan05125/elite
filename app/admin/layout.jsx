import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-[#020817] text-white">

      <AdminSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}