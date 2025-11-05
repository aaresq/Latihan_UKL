import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presensi App",
  description: "Dashboard presensi sekolah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
