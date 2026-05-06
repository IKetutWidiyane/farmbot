import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "FarmBot - Smart Farming with AI & IoT",
  description:
    "A modern landing page template for an AI and IoT smart farming startup.",
  keywords: ["FarmBot", "Smart Farming", "IoT", "AI", "Agriculture", "SaaS"],
  authors: [{ name: "FarmBot" }],
  openGraph: {
    title: "FarmBot - Smart Farming with AI & IoT",
    description:
      "Real-time monitoring, AI prediction, and automation for modern agriculture.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
