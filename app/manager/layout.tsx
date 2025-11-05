"use client";

import SidebarManager from "@/components/sidebar/SidebarManager";
import TopbarManager from "@/components/topbar/TopbarManager";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-purple-50">
      {/* Sidebar */}
      <SidebarManager />

      <div className="flex-1">
        {/* Topbar */}
        <TopbarManager />

        {/* Konten Halaman */}
        <div className="p-6 h-[calc(100vh-64px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
