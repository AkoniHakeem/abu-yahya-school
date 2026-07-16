import Image from "next/image";

export default function ClassesSection() {
  return (
    <section
      id="courses"
      className="w-full max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-section-gap)] flex flex-col gap-24"
    >
      {/* Arabic Studies Module */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/arabic-studies.png"
            alt="Student practicing Arabic calligraphy with specialized pen on warm wooden desk"
            width={640}
            height={400}
            className="w-full h-80 object-cover rounded-2xl shadow-ambient"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface">
            Comprehensive Arabic Studies
          </h2>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
            Our Arabic curriculum is structured to take you from absolute
            beginner to advanced fluency. We focus on grammar (Nahw), morphology
            (Sarf), vocabulary, and conversational skills to ensure a holistic
            understanding of the language.
          </p>
          <ul className="space-y-3 w-full">
            {[
              "Structured progression levels",
              "Modern standard & classical Arabic",
              "Focus on reading, writing, and speaking",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[16px] text-on-surface"
              >
                <span className="material-symbols-outlined icon-filled text-primary text-[20px]">
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quran Module */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/quran-studies.png"
            alt="Open Quran on modern desk with tablet and headphones for online Quran learning"
            width={640}
            height={400}
            className="w-full h-80 object-cover rounded-2xl shadow-ambient"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface">
            Quranic Memorization &amp; Tajweed
          </h2>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
            Perfect your recitation and deepen your connection with the Quran.
            Our expert tutors guide you through proper pronunciation (Tajweed)
            and effective memorization techniques (Hifz) tailored to your pace.
          </p>
          <ul className="space-y-3 w-full">
            {[
              "One-on-one recitation correction",
              "Detailed Tajweed rules application",
              "Progress tracking and revision plans",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[16px] text-on-surface"
              >
                <span className="material-symbols-outlined icon-filled text-secondary text-[20px]">
                  star
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
