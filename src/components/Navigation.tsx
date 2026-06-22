"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full transition-all duration-300">
      <div className="px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-brand-navy">
            Myo<span className="text-brand-blue">Sync</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-brand-text font-medium hover:text-brand-teal transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#book" className="flex items-center gap-2 border-2 border-brand-teal text-brand-teal px-4 py-2 rounded-full font-semibold hover:bg-brand-teal hover:text-white transition-colors">
            <Phone size={18} />
            <span>Call Us</span>
          </a>
          <Link href="#book" className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal/90 transition-colors">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-text hover:text-brand-teal transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-brand-navy text-white min-h-screen p-6 shadow-2xl animate-in slide-in-from-right-8 fade-in duration-300">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-xl font-medium hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/20 my-4" />
            <a href="#book" className="flex items-center justify-center gap-2 border-2 border-brand-teal text-brand-teal px-4 py-3 rounded-full font-semibold hover:bg-brand-teal hover:text-white transition-colors">
              <Phone size={20} />
              <span>Call Us</span>
            </a>
            <Link href="#book" className="bg-brand-teal text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-brand-teal/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
