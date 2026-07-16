#!/usr/bin/env python3
"""Setup script to write all project source files for Abu-Yahya Arabic School."""
import os

BASE = "/home/akonimayowa/projects/abu-yahya-school"

files = {}

# ── Config Files ──

files["tsconfig.json"] = """{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}"""

files["next.config.ts"] = """import type { NextConfig } from "next";
const nextConfig: NextConfig = {};
export default nextConfig;
"""

files["postcss.config.mjs"] = """const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
"""

files["next-env.d.ts"] = """/// <reference types="next" />
/// <reference types="next/image-types/global" />
"""

# ── Global CSS (Design System) ──

files["src/app/globals.css"] = """@import "tailwindcss";

/* ============================================================
   Abu-Yahya Arabic School - Design System: "Heritage & Growth"
   Tailwind CSS v4 Theme Configuration
   ============================================================ */

@theme {
  /* -- Colors -- */
  --color-surface: #f9f9ff;
  --color-surface-dim: #d0daef;
  --color-surface-bright: #f9f9ff;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #eff3ff;
  --color-surface-container: #e6eeff;
  --color-surface-container-high: #dee9fd;
  --color-surface-container-highest: #d9e3f7;
  --color-on-surface: #121c2a;
  --color-on-surface-variant: #404944;
  --color-inverse-surface: #273140;
  --color-inverse-on-surface: #ebf1ff;
  --color-outline: #707974;
  --color-outline-variant: #bfc9c3;
  --color-surface-tint: #2b6954;
  --color-surface-variant: #d9e3f7;

  --color-primary: #003527;
  --color-on-primary: #ffffff;
  --color-primary-container: #064e3b;
  --color-on-primary-container: #80bea6;
  --color-inverse-primary: #95d3ba;
  --color-primary-fixed: #b0f0d6;
  --color-primary-fixed-dim: #95d3ba;
  --color-on-primary-fixed: #002117;
  --color-on-primary-fixed-variant: #0b513d;

  --color-secondary: #735c00;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #fed65b;
  --color-on-secondary-container: #745c00;
  --color-secondary-fixed: #ffe088;
  --color-secondary-fixed-dim: #e9c349;
  --color-on-secondary-fixed: #241a00;
  --color-on-secondary-fixed-variant: #574500;

  --color-tertiary: #2c2f30;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #424546;
  --color-on-tertiary-container: #b0b2b3;
  --color-tertiary-fixed: #e1e3e4;
  --color-tertiary-fixed-dim: #c5c7c8;
  --color-on-tertiary-fixed: #191c1d;
  --color-on-tertiary-fixed-variant: #454748;

  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  --color-background: #f9f9ff;
  --color-on-background: #121c2a;

  /* -- Typography -- */
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-headline: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-arabic: "Noto Serif", serif;

  /* -- Spacing -- */
  --spacing-unit: 8px;
  --spacing-gutter: 24px;
  --spacing-margin-mobile: 16px;
  --spacing-margin-desktop: 40px;
  --spacing-section-gap: 80px;
  --spacing-container-max: 1280px;

  /* -- Border Radius -- */
  --radius-sm: 0.25rem;
  --radius-DEFAULT: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
}

/* -- Base Styles -- */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* -- Material Symbols Icon Setup -- */
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.icon-filled {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}

/* -- Custom Utilities -- */
.shadow-ambient {
  box-shadow:
    0 10px 25px -5px rgba(0, 53, 39, 0.05),
    0 8px 10px -6px rgba(0, 53, 39, 0.01);
}

.shadow-card {
  box-shadow: 0 4px 20px -4px rgba(0, 53, 39, 0.08);
}

.shadow-elevated {
  box-shadow: 0 8px 30px rgba(0, 53, 39, 0.08);
}

::selection {
  background-color: #b0f0d6;
  color: #002117;
}
"""

# ── Layout ──

files["src/app/layout.tsx"] = """import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Abu-Yahya Arabic School | Learn Arabic & Quran Online",
  description:
    "Master Arabic and Quran from the comfort of your home. Join thousands of students worldwide in preserving tradition through structured, professional online learning with expert tutors.",
  keywords: [
    "Arabic school",
    "learn Arabic online",
    "Quran classes",
    "Tajweed",
    "Islamic education",
    "Abu-Yahya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${notoSerif.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
"""

# ── Page ──

files["src/app/page.tsx"] = """import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ClassesSection from "@/components/landing/ClassesSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <ClassesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
"""

# ── Navbar ──

files["src/components/landing/Navbar.tsx"] = '''"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-[var(--spacing-margin-desktop)] h-20 bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
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

      <ul className="hidden md:flex gap-8 items-center">
        <li>
          <a href="#courses" className="text-on-surface-variant hover:text-primary transition-colors text-[16px]">
            Courses
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors text-[16px]">
            Pricing
          </a>
        </li>
        <li>
          <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors text-[16px]">
            About
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <Link
          href="/auth/signin"
          className="hidden sm:inline-flex bg-surface text-primary border border-primary px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-surface-container-low transition-colors active:scale-95 duration-150"
        >
          Sign In
        </Link>

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

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container-lowest shadow-elevated border-t border-outline-variant/20 md:hidden">
          <ul className="flex flex-col p-4 gap-1">
            <li>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]">
                Courses
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors text-[16px]">
                About
              </a>
            </li>
            <li className="pt-2 border-t border-outline-variant/20 mt-2">
              <Link href="/auth/signin" className="block w-full text-center bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-[14px]">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
'''

# ── Hero Section ──

files["src/components/landing/HeroSection.tsx"] = '''import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-section-gap)] flex flex-col lg:flex-row items-center gap-[var(--spacing-gutter)] min-h-[75vh]">
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
        <span className="bg-surface-container-high text-primary px-4 py-1.5 rounded-full font-semibold text-[13px] border border-outline-variant/40 tracking-wide uppercase">
          Excellence in Islamic Education
        </span>
        <h1 className="font-display text-[36px] md:text-[48px] font-bold text-on-surface leading-[1.15] tracking-tight">
          Master Arabic &amp; Quran from the Comfort of Your Home.
        </h1>
        <p className="font-body text-[18px] text-on-surface-variant leading-relaxed max-w-lg">
          Join thousands of students worldwide in preserving tradition through
          structured, professional online learning with expert tutors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a href="#pricing" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold text-[14px] text-center shadow-ambient hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-200 active:scale-95">
            Start Learning Today
          </a>
          <a href="#courses" className="border border-secondary text-secondary px-8 py-4 rounded-lg font-semibold text-[14px] text-center hover:bg-secondary/5 transition-all duration-200">
            Explore Curriculum
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl translate-x-4 translate-y-4 -z-10" />
        <Image
          src="/images/hero.png"
          alt="Student learning Arabic online in a calm, modern study environment"
          width={640}
          height={480}
          className="w-full h-auto object-cover rounded-3xl shadow-ambient"
          priority
        />
      </div>
    </section>
  );
}
'''

# ── Features Section ──

files["src/components/landing/FeaturesSection.tsx"] = '''const features = [
  {
    icon: "videocam",
    title: "Live Interactive Classes",
    description: "Engage directly with your instructors in real-time. Ask questions, participate in discussions, and get immediate feedback.",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    icon: "play_circle",
    title: "Lesson Recordings",
    description: "Never miss a concept. Access high-quality recordings of all your sessions to review and revise at your own pace.",
    accentColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: "school",
    title: "Professional Tutors",
    description: "Learn from certified, experienced educators dedicated to your spiritual and academic growth in an engaging environment.",
    accentColor: "bg-primary/10 text-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-surface-container-lowest py-[var(--spacing-section-gap)]">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface mb-4">
            Why Choose Abu-Yahya School?
          </h2>
          <p className="font-body text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We blend traditional pedagogy with modern technology to deliver an unparalleled learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-surface rounded-2xl p-8 border border-outline-variant/40 shadow-ambient flex flex-col items-start hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 ${feature.accentColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-on-surface mb-3">{feature.title}</h3>
              <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

# ── Classes Section ──

files["src/components/landing/ClassesSection.tsx"] = '''import Image from "next/image";

export default function ClassesSection() {
  return (
    <section id="courses" className="w-full max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-section-gap)] flex flex-col gap-24">
      {/* Arabic Studies */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image src="/images/arabic-studies.png" alt="Student practicing Arabic calligraphy" width={640} height={400} className="w-full h-80 object-cover rounded-2xl shadow-ambient" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface">Comprehensive Arabic Studies</h2>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
            Our Arabic curriculum is structured to take you from absolute beginner to advanced fluency. We focus on grammar (Nahw), morphology (Sarf), vocabulary, and conversational skills to ensure a holistic understanding of the language.
          </p>
          <ul className="space-y-3 w-full">
            {["Structured progression levels", "Modern standard & classical Arabic", "Focus on reading, writing, and speaking"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[16px] text-on-surface">
                <span className="material-symbols-outlined icon-filled text-primary text-[20px]">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quran Module */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image src="/images/quran-studies.png" alt="Open Quran with digital learning tools" width={640} height={400} className="w-full h-80 object-cover rounded-2xl shadow-ambient" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface">Quranic Memorization &amp; Tajweed</h2>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
            Perfect your recitation and deepen your connection with the Quran. Our expert tutors guide you through proper pronunciation (Tajweed) and effective memorization techniques (Hifz) tailored to your pace.
          </p>
          <ul className="space-y-3 w-full">
            {["One-on-one recitation correction", "Detailed Tajweed rules application", "Progress tracking and revision plans"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[16px] text-on-surface">
                <span className="material-symbols-outlined icon-filled text-secondary text-[20px]">star</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
'''

# ── Pricing Section ──

files["src/components/landing/PricingSection.tsx"] = '''const plans = [
  {
    name: "Standard Plan",
    price: "$40",
    highlighted: false,
    badge: null,
    features: ["2 live classes/week", "8 lessons/month", "45 mins/lesson", "Monthly assessment", "Full portal access", "Live lessons with class recordings"],
    buttonStyle: "border border-primary text-primary hover:bg-surface-container-high",
    buttonText: "Select Standard",
  },
  {
    name: "Personal Plan",
    price: "$50",
    highlighted: true,
    badge: "Most Popular",
    features: ["8 one-on-one lessons/month", "Weekly live revision session", "45 mins/lesson", "Monthly assessment", "Full portal access", "Live lessons with class recordings"],
    buttonStyle: "bg-primary text-on-primary hover:bg-primary-container shadow-sm",
    buttonText: "Select Personal",
  },
  {
    name: "Premium Plan",
    price: "$70",
    highlighted: false,
    badge: "Best Value",
    features: ["3 live classes/week", "12 lessons/month", "Weekly mentoring with Abu Yahya", "Free study materials & books", "Flexible scheduling", "Full portal access"],
    buttonStyle: "border border-primary text-primary hover:bg-surface-container-high",
    buttonText: "Select Premium",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-surface-container-low py-[var(--spacing-section-gap)]">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface mb-4">Invest in Your Knowledge</h2>
          <p className="font-body text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your schedule and learning goals. Transparent pricing with no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${plan.highlighted ? "bg-surface-container-lowest border-2 border-primary shadow-elevated relative transform md:-translate-y-4" : "bg-surface border border-outline-variant/40 shadow-sm"}`}>
              {plan.badge && plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 rounded-full font-semibold text-[12px] uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              {plan.badge && !plan.highlighted && (
                <span className="inline-block self-start bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-semibold text-[12px] uppercase tracking-wider mb-2">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-[24px] font-semibold text-on-surface mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-[40px] font-bold text-primary">{plan.price}</span>
                <span className="text-[16px] text-on-surface-variant">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className={`flex items-start gap-3 text-[16px] ${plan.highlighted ? "text-on-surface" : "text-on-surface-variant"}`}>
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3.5 rounded-lg font-semibold text-[14px] transition-all duration-200 active:scale-95 cursor-pointer ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

# ── Footer ──

files["src/components/landing/Footer.tsx"] = '''import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
  { label: "Curriculum", href: "#courses" },
];

export default function Footer() {
  return (
    <footer className="w-full py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col items-center gap-[var(--spacing-gutter)] bg-primary">
      <div className="font-display text-[28px] md:text-[32px] font-semibold text-on-primary mb-4">
        Abu-Yahya School
      </div>
      <ul className="flex flex-wrap justify-center gap-6 mb-4">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-[16px] opacity-80 hover:opacity-100">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-on-primary/70 text-[16px] text-center max-w-xl leading-relaxed">
        &copy; 2025 Abu-Yahya Arabic School. Preserving Tradition through Excellence.
      </div>
    </footer>
  );
}
'''

# Write all files
for path, content in files.items():
    full_path = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w") as f:
        f.write(content)
    print(f"  wrote {path}")

print("All source files written successfully!")
