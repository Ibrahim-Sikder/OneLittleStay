"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo/logo.png";

const navLinks = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className="w-full h-14 md:h-[89px] border-b bg-white sticky top-0 z-50"
        style={{ borderColor: "var(--border-light)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Company Logo"
              height={120}
              width={120}
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                onClick={() => setActiveLink(link)}
                className={`text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  activeLink === link
                    ? "border-b-2 pb-0.5 text-primary"
                    : "text-secondary hover:text-primary"
                }`}
                style={
                  activeLink === link ? { borderColor: "var(--primary)" } : {}
                }
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:scale-105 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Schedule A Meeting <span className="text-base">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-secondary" />
            ) : (
              <Menu size={24} className="text-secondary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-[55px] h-[calc(100vh-89px)] w-64 bg-white shadow-xl animate-slide-in">
            <nav className="flex flex-col py-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  onClick={() => {
                    setActiveLink(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-6 py-3 text-base font-medium transition-colors rounded-md ${
                    activeLink === link
                      ? "bg-primary-light/20 border-r-4 text-primary"
                      : "text-secondary hover:text-primary hover:bg-light"
                  }`}
                  style={
                    activeLink === link ? { borderColor: "var(--primary)" } : {}
                  }
                >
                  {link}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div
                className="px-2 pt-4 mt-4 border-t"
                style={{ borderColor: "var(--border-light)" }}
              >
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-white text-sm font-semibold px-2 py-2 rounded-md transition-all duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Schedule A Meeting <span className="text-base">→</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
