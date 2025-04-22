"use client";

import Navbar from "@/components/navheader";
import "../globals.css";
import Sidebar from "@/components/sidebar";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gray-50">
          {/* Sidebar */}

          <Sidebar />
          {/* Content */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <Navbar />

            {/* Page content */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AuthLayout;
