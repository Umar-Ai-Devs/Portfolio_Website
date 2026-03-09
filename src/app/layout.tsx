import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Muhammad Umar Farooq | Building Intelligent AI & Web Systems",
  description: "Portfolio of Muhammad Umar Farooq — AI & Python Developer specializing in Generative AI, RAG, LLMs, and scalable web systems. Available for hire.",
  keywords: ["AI Developer", "Python", "Generative AI", "RAG", "Machine Learning", "Next.js"],
  openGraph: {
    title: "Muhammad Umar Farooq | AI & Web Developer",
    description: "Building intelligent AI and web systems. Generative AI, RAG, Python, Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
