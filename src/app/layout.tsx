import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/share/Header";
import FooterSection from "@/components/share/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
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
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
