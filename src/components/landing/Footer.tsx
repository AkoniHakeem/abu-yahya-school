import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
  { label: "Curriculum", href: "#courses" },
];

export default function Footer() {
  return (
    <footer className="w-full py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col items-center gap-[var(--spacing-gutter)] bg-primary">
      {/* Brand */}
      <div className="font-display text-[28px] md:text-[32px] font-semibold text-on-primary mb-4">
        Abu-Yahya School
      </div>

      {/* Links */}
      <ul className="flex flex-wrap justify-center gap-6 mb-4">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-[16px] opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <div className="text-on-primary/70 text-[16px] text-center max-w-xl leading-relaxed">
        © {new Date().getFullYear()} Abu-Yahya Arabic School. Preserving
        Tradition through Excellence.
      </div>
    </footer>
  );
}
