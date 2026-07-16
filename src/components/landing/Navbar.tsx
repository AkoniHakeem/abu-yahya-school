"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-[var(--spacing-margin-desktop)] h-20 bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Abu-Yahya Arabic School Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="font-display text-[24px] md:text-[28px] font-bold text-primary">
          Abu-Yahya School
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 items-center">
        <li>
          <a
            href="#courses"
            className="text-on-surface-variant hover:text-primary transition-colors text-[16px]"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-on-surface-variant hover:text-primary transition-colors text-[16px]"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-on-surface-variant hover:text-primary transition-colors text-[16px]"
          >
            About
          </a>
        </li>
      </ul>

      {/* Right side — CTA + Hamburger */}
      <div className="flex items-center gap-3">
        <Link
          href="/auth/signin"
          className="hidden sm:inline-flex bg-surface text-primary border border-primary px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-surface-container-low transition-colors active:scale-95 duration-150"
        >
          Sign In
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container-lowest shadow-elevated border-t border-outline-variant/20 md:hidden animate-in slide-in-from-top">
          <ul className="flex flex-col p-4 gap-1">
            <li>
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]"
              >
                About
              </a>
            </li>
            <li className="pt-2 border-t border-outline-variant/20 mt-2">
              <Link
                href="/auth/signin"
                className="block w-full text-center bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-[14px]"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
