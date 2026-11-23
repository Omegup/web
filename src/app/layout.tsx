import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/site-footer";
import NavBar from "@/components/layout/site-header";
import StyledRegistry from "@/components/styled-registry";
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
      <head>
        <style dangerouslySetInnerHTML={{ __html: "body{visibility:hidden}" }} />
      </head>
      <body className={inter.className}>
        <StyledRegistry>
          <NavBar />
          {children}
          <Footer />
        </StyledRegistry>
      </body>
    </html>
  );
}
