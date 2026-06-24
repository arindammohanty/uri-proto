import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

// Utilizing the variable font capabilities of Inter without restricting specific weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "URI Tech | IT Staffing & Recruitment",
  description:
    "URI Tech is a leading IT staffing and recruitment firm connecting exceptional talent with forward-thinking organizations across India.",
  keywords: [
    "IT staffing",
    "recruitment",
    "campus hiring",
    "contract hiring",
    "permanent placement",
    "HR consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Applying the flexbox and min-height directly to the body ensures a robust sticky footer structure */}
      <body 
        className="flex min-h-screen flex-col font-sans antialiased text-slate-900 selection:bg-orange-200 selection:text-orange-900" 
        suppressHydrationWarning
      >
        <Navbar />
        {/* The flex-1 class forces the main content area to expand, automatically pushing the footer to the bottom */}
        <main className="flex flex-1 flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
