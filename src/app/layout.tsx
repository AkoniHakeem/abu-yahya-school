import type { Metadata } from "next";
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
      <body className="bg-surface text-on-surface font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
