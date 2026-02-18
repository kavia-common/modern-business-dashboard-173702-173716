import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Business Dashboard",
  description: "A modern admin dashboard for business management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
