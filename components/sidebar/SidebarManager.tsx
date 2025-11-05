"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarManager() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/manager" },
    { name: "Analisis", href: "/manager/analisis" },
    { name: "Settings", href: "/manager/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-purple-700">PRESTIO</h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`p-3 rounded-lg font-medium ${
              pathname === item.href
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-purple-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
