import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-section-gap)] flex flex-col lg:flex-row items-center gap-[var(--spacing-gutter)] min-h-[75vh]">
      {/* Left — Text Content */}
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
          <a
            href="#pricing"
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold text-[14px] text-center shadow-ambient hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
          >
            Start Learning Today
          </a>
          <a
            href="#courses"
            className="border border-secondary text-secondary px-8 py-4 rounded-lg font-semibold text-[14px] text-center hover:bg-secondary/5 transition-all duration-200"
          >
            Explore Curriculum
          </a>
        </div>
      </div>

      {/* Right — Hero Image */}
      <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
        {/* Decorative offset */}
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
