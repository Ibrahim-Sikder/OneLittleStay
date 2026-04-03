import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/share/footer/Footer";
import Header from "@/components/share/Header";

// Body font (high readability)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading font (modern + structured)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Little Stay",
  description:
    "Premium property management solutions for your real estate needs",
  keywords: [
    "property management",
    "real estate",
    "vacation rentals",
    "property services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-gray-800">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <FooterSection />
      </body>
    </html>
  );
}
