"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

 function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "NGOs", path: "/ngos" },
    { name: "Grants", path: "/grants" },
    { name: "Applications", path: "/grants/applications" },
  ];

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gray-50">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md hidden md:block">
            <div className="p-6 text-2xl font-bold text-indigo-600">
              NGO Tracker
            </div>
            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-6 py-3 rounded-lg transition ${
                    pathname === item.path
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <header className="sticky top-0 bg-white border-b p-4 flex items-center justify-between shadow-sm z-10">
              <h1 className="text-xl font-semibold text-gray-800">
                Admin Panel
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">admin@example.com</span>
                {/* <img
              src="/avatar.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border"
            /> */}
              </div>
            </header>

            {/* Page content */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout
