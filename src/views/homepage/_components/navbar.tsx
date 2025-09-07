"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skill" },
    { name: "Projects", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              DevDebo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  isScrolled ? "text-white" : "text-white"
                } hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="https://github.com/Debola88"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobile}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? "text-white hover:text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 visibility-visible"
              : "max-h-0 opacity-0 visibility-hidden"
          } overflow-hidden`}
        >
          <div className="bg-black/80 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-white hover:text-blue-400 hover:bg-white/10 transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="px-6 pt-4">
              <Link
                href="/get-started"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
