import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import SideNavbar from "@/components/sections/SideNavbar";


const inter =Inter({
  variable:"--font-inter-sans",
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "Docter web",
  description: "Affiliated doctor dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        <SideNavbar />
        <main className="ml-60 mt-[3px] pt-0 p-6 bg-[#f6f2f2] min-h-screen">
        {children}
        </main >
      </body>
    </html>
  );
}
