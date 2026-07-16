const plans = [
  {
    name: "Standard Plan",
    price: "$40",
    highlighted: false,
    badge: null,
    features: [
      "2 live classes/week",
      "8 lessons/month",
      "45 mins/lesson",
      "Monthly assessment",
      "Full portal access",
      "Live lessons with class recordings",
    ],
    buttonStyle:
      "border border-primary text-primary hover:bg-surface-container-high",
    buttonText: "Select Standard",
  },
  {
    name: "Personal Plan",
    price: "$50",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "8 one-on-one lessons/month",
      "Weekly live revision session",
      "45 mins/lesson",
      "Monthly assessment",
      "Full portal access",
      "Live lessons with class recordings",
    ],
    buttonStyle:
      "bg-primary text-on-primary hover:bg-primary-container shadow-sm",
    buttonText: "Select Personal",
  },
  {
    name: "Premium Plan",
    price: "$70",
    highlighted: false,
    badge: "Best Value",
    features: [
      "3 live classes/week",
      "12 lessons/month",
      "Weekly mentoring with Abu Yahya",
      "Free study materials & books",
      "Flexible scheduling",
      "Full portal access",
    ],
    buttonStyle:
      "border border-primary text-primary hover:bg-surface-container-high",
    buttonText: "Select Premium",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full bg-surface-container-low py-[var(--spacing-section-gap)]"
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-on-surface mb-4">
            Invest in Your Knowledge
          </h2>
          <p className="font-body text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your schedule and learning goals. Transparent
            pricing with no hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-surface-container-lowest border-2 border-primary shadow-elevated relative transform md:-translate-y-4"
                  : "bg-surface border border-outline-variant/40 shadow-sm"
              }`}
            >
              {/* Badge */}
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

              <h3 className="font-display text-[24px] font-semibold text-on-surface mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-[40px] font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-[16px] text-on-surface-variant">
                  /month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className={`flex items-start gap-3 text-[16px] ${
                      plan.highlighted
                        ? "text-on-surface"
                        : "text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                      check
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-lg font-semibold text-[14px] transition-all duration-200 active:scale-95 cursor-pointer ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
