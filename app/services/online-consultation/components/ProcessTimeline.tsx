"use client";

const steps = [
  {
    num: "01",
    title: "Book Appointment",
    desc: "Select your preferred consultation plan (Basic, Detailed, or Premium) and start booking.",
  },
  {
    num: "02",
    title: "Share Birth Details",
    desc: "Fill in your accurate date, time, and place of birth in the secure booking form below.",
  },
  {
    num: "03",
    title: "Receive Confirmation",
    desc: "We will contact you directly on WhatsApp to coordinate your appointment slot and confirm payment details.",
  },
  {
    num: "04",
    title: "Attend Consultation",
    desc: "Connect 1-on-1 with Gokul Murugan via audio call or video call at your scheduled time.",
  },
  {
    num: "05",
    title: "Guidance & Remedies",
    desc: "Receive clear life predictions, answers to your questions, and practical remedies (pariharams).",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-surface-light via-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-slate-100">
      {/* Background radial accent */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Simple Workflow ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Get your personalized astrology predictions in 5 simple steps.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-4 w-full">
          {/* Connector Line (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200/80 pointer-events-none hidden md:block" />
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200/80 pointer-events-none block md:hidden" />

          {/* Steps Mapping */}
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-6 md:text-center flex-1 group"
            >
              {/* Numbered Circle Badge */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-serif font-extrabold text-base border-4 border-white shadow-md z-10 shrink-0 select-none transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-light">
                {step.num}
              </div>

              {/* Text content details */}
              <div className="flex flex-col md:items-center mt-1 md:mt-0">
                <span className="text-amber-500 font-extrabold text-[10px] uppercase tracking-wider mb-1 select-none">
                  Step {step.num}
                </span>
                <h3 className="text-text-main font-bold text-base sm:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-sub text-xs sm:text-sm leading-relaxed max-w-xs md:max-w-[170px] lg:max-w-[190px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
