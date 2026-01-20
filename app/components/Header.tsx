"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // VCC pages that use horizontal logo
  const vccPages = ["/", "/about", "/programs", "/contacts"];
  const isVCCPage = vccPages.includes(pathname);
  const isPPBJ = pathname == "/programs/japan/ppbj";
  const logoSrc = isVCCPage ? "/images/logo/vcc-horizontal.jpg" : "/images/logo/vcc-logo-only.jpg";

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/programs", label: "Program" },
    { href: "/contacts", label: "Kontak" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`relative ${isVCCPage ? "h-12 w-48" : "h-12 w-12"} transition-all duration-300`}>
              <Image
                src={logoSrc}
                alt="Logo Komisi Kerja Sama SV IPB"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>
          {isPPBJ && <Link href="/programs/japan/ppbj" className="leading-tight hidden md:block">
            <div className="font-semibold text-gray-900">
              Pusat Pelatihan Bahasa Jepang
            </div>
            <div className="text-xs text-gray-600">
              Sekolah Vokasi IPB University
            </div>
          </Link>}

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 ml-auto mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-slate-700 font-semibold rounded-lg hover:text-blue-600 transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
