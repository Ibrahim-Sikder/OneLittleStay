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

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="w-full h-[89px] border-b bg-white sticky top-0 z-50"
        style={{ borderColor: "var(--border-light)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              height={120}
              width={120}
              className="h-auto w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                onClick={() => setActiveLink(link)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeLink === link
                    ? "border-b-2 pb-0.5"
                    : "text-secondary hover:text-primary"
                }`}
                style={
                  activeLink === link
                    ? {
                        color: "var(--primary)",
                        borderColor: "var(--primary)",
                      }
                    : {}
                }
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="#"
            className="hidden md:flex text-white text-sm font-semibold px-5 py-2.5 rounded-md items-center gap-2 transition-all duration-200 hover:scale-105 bg-primary hover:bg-primary-dark"
          >
            Schedule A Meeting <span className="text-base">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-light"
            aria-label="Toggle menu"
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-[89px] h-[calc(100vh-89px)] w-64 bg-white shadow-xl animate-slide-in">
            <nav className="flex flex-col py-6">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  onClick={() => {
                    setActiveLink(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-6 py-3 text-base font-medium transition-colors ${
                    activeLink === link
                      ? "bg-primary-light/20 border-r-4 text-primary"
                      : "text-secondary hover:text-primary hover:bg-light"
                  }`}
                  style={
                    activeLink === link
                      ? {
                          borderColor: "var(--primary)",
                        }
                      : {}
                  }
                >
                  {link}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div
                className="px-6 pt-4 mt-4 border-t"
                style={{ borderColor: "var(--border-light)" }}
              >
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-200 w-full bg-primary hover:bg-primary-dark"
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
