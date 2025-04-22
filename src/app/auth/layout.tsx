"use client";
import "./globals.css";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-gray-50">
          <div className="flex-1 flex flex-col">
            {/* Page content */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
