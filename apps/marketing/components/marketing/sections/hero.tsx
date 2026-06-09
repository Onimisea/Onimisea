export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[96vh] flex-col justify-center overflow-hidden px-0 pt-[118px] pb-[78px] max-md:min-h-[82vh] max-md:pt-[90px] max-md:pb-[42px] md:max-lg:min-h-[82vh]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_118%_92%_at_50%_48%,#000_0%,#000_68%,rgba(0,0,0,0.64)_86%,transparent_100%)] bg-[length:56px_56px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_42%_34%_at_50%_48%,rgba(14,165,233,0.18)_0%,rgba(14,165,233,0.07)_34%,transparent_70%),radial-gradient(ellipse_24%_20%_at_42%_42%,rgba(14,165,233,0.1),transparent_72%),radial-gradient(ellipse_22%_18%_at_61%_57%,rgba(14,165,233,0.08),transparent_74%)] opacity-[0.86] blur-[8px]"
        aria-hidden="true"
      />
      <canvas id="hc" className="absolute inset-0 z-[1]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_58%_48%_at_50%_46%,rgba(8,12,20,0.12)_0%,rgba(8,12,20,0.22)_48%,rgba(8,12,20,0.92)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]">
        <div className="relative z-[3] text-center">
          <div className="mb-7 inline-flex animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] items-center gap-2 rounded-full border border-green-500/25 bg-green-500/[0.07] px-[14px] py-1.5 font-mono text-[11px] font-medium tracking-normal text-green-400 uppercase opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
            <span
              className="size-[7px] shrink-0 animate-[onimisea-pulse-dot_2.2s_ease-in-out_infinite] rounded-full bg-green-500 motion-reduce:animate-none"
              aria-hidden="true"
            />
            Available for Remote Work
          </div>
          <span className="mb-[18px] block animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] font-mono text-[11px] leading-relaxed font-medium tracking-normal text-onimisea-signal uppercase opacity-0 [animation-delay:0.08s] motion-reduce:animate-none motion-reduce:opacity-100">
            CTO-level judgment · Principal engineering execution · AI-native systems
          </span>
          <h1 className="mb-[22px] animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] text-[34px] leading-[1.03] font-bold tracking-normal text-onimisea-text-primary opacity-0 [animation-delay:0.16s] motion-reduce:animate-none motion-reduce:opacity-100 min-[360px]:text-[38px] sm:text-[42px] sm2:text-[46px] sm3:text-[50px] md:text-[56px] md3:text-[60px] lg:text-[64px] lg2:text-[66px]">
            I engineer business-critical
            <br />
            software from idea
            <br />
            to <em className="text-onimisea-signal not-italic">production.</em>
          </h1>
          <p className="mx-auto mb-10 max-w-[660px] animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] text-[15px] leading-[1.7] tracking-normal text-onimisea-text-secondary opacity-0 [animation-delay:0.26s] motion-reduce:animate-none motion-reduce:opacity-100 max-md:mb-[26px] sm3:text-base md3:text-[17px]">
            Onimisea is Ahmed Tijani&apos;s personal engineering brand for secure,
            scalable, accessible, high-performance software systems and AI-native
            products. I help remote teams, founders, and businesses turn product ambiguity
            into maintained production systems.
          </p>
          <div className="flex animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] flex-wrap items-center justify-center gap-3 opacity-0 [animation-delay:0.36s] motion-reduce:animate-none motion-reduce:opacity-100 max-sm:w-full">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-button bg-onimisea-signal px-4 py-[14px] text-[13px] font-bold tracking-normal whitespace-nowrap text-onimisea-cta-ink no-underline transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-onimisea-signal-strong hover:shadow-[0_10px_28px_rgba(14,165,233,0.3)] max-sm:w-full sm:px-[26px] sm:text-sm"
            >
              Discuss Remote Engagement
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-button border border-white/15 bg-transparent px-4 py-[14px] text-[13px] font-semibold tracking-normal whitespace-nowrap text-onimisea-text-primary no-underline transition-[background,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-onimisea-signal hover:bg-onimisea-signal/[0.06] max-sm:w-full sm:px-[26px] sm:text-sm"
            >
              My Work
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-7 left-1/2 z-[2] -translate-x-1/2 animate-[onimisea-scroll-bob_2s_ease-in-out_infinite] opacity-35 motion-reduce:animate-none"
        aria-hidden="true"
      >
        <div className="mx-auto h-9 w-px bg-[linear-gradient(to_bottom,var(--onimisea-signal),transparent)]" />
      </div>
    </section>
  )
}
