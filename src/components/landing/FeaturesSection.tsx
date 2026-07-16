const features = [
  {
    icon: "videocam",
    title: "Live Interactive Classes",
    description:
      "Engage directly with your instructors in real-time. Ask questions, participate in discussions, and get immediate feedback.",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    icon: "play_circle",
    title: "Lesson Recordings",
    description:
      "Never miss a concept. Access high-quality recordings of all your sessions to review and revise at your own pace.",
    accentColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: "school",
    title: "Professional Tutors",
    description:
      "Learn from certified, experienced educators dedicated to your spiritual and academic growth in an engaging environment.",
    accentColor: "bg-primary/10 text-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full bg-surface-container-lowest py-[var(--spacing-section-gap)]"
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface mb-4">
            Why Choose Abu-Yahya School?
          </h2>
          <p className="font-body text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We blend traditional pedagogy with modern technology to deliver an
            unparalleled learning experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-8 border border-outline-variant/40 shadow-ambient flex flex-col items-start hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${feature.accentColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="material-symbols-outlined">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-on-surface mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
