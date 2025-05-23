import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { ghibliFont } from "@/lib/font"; // Import the ghibli font
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rohit Sharma",
  description: "Portfolio in Ghibli Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} ${ghibliFont.variable} antialiased relative`}
      >
        <div className="texture" />
        {children}
      </body>
    </html>
  );
}