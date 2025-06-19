import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar buraya gelecek */}
      <aside className="w-64 bg-gray-100 p-4"><Sidebar /></aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
} 