import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/site-footer";
import NavBar from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omegup",
  description:
    "Omegup designs and builds websites, web applications, and mobile products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
