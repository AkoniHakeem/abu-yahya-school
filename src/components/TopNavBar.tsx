"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface dark:bg-surface-dim shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-margin-desktop h-16 md:h-20">
        <Link href="/" className="font-headline text-[24px] md:text-[32px] font-bold text-primary dark:text-primary-fixed">
          Abu-Yahya School
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#classes">Courses</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#pricing">Admissions</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#features">About</Link>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="bg-surface text-primary border border-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors inline-block text-center">
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-on-surface p-2 rounded-md hover:bg-surface-container-high transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface dark:bg-surface-dim border-t border-outline-variant/20 px-4 py-4 shadow-elevated">
          <ul className="flex flex-col gap-1">
            <li>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg px-4 py-3 transition-colors" href="#classes">Courses</Link>
            </li>
            <li>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg px-4 py-3 transition-colors" href="#pricing">Admissions</Link>
            </li>
            <li>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg px-4 py-3 transition-colors" href="#features">About</Link>
            </li>
            <li className="pt-3 mt-3 border-t border-outline-variant/20">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="block w-full bg-surface text-primary border border-primary px-6 py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors text-center">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
