
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
        <div>
            <main>{children}</main>
          </div>
      </body>
    </html>
  );
}

export default RootLayout;
