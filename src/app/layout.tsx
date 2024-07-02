import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice Buddy",
  description: "An app for developing musical skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-celadon text-oxford-blue w-full h-full">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
