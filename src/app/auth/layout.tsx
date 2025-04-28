"use client";

import Navbar from "@/components/navheader";
import "../globals.css";
import Sidebar from "@/components/sidebar";
import PageBack from "@/components/backbutton";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gray-50 relative">
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r z-40 hidden md:block">
            <Sidebar />
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col sm:ml-0 md:ml-64">
            {/* Topbar */}
            <Navbar />
            {/* Page content */}
            <main className="flex-1 p-3">
              <PageBack />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AuthLayout;
