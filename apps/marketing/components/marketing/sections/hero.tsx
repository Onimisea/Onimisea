export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[96vh] flex-col justify-center overflow-hidden px-0 pt-[118px] pb-[78px] max-md:min-h-[82vh] max-md:pt-[90px] max-md:pb-[42px] md:max-lg:min-h-[82vh]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(235,229,218,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(235,229,218,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_92%_72%_at_50%_48%,#000_0%,rgba(0,0,0,0.72)_54%,rgba(0,0,0,0.24)_76%,transparent_94%)] bg-[length:44px_44px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 [background-image:var(--onimisea-glow-hero)] opacity-[0.86] blur-[8px]"
        aria-hidden="true"
      />
      <canvas id="hc" className="absolute inset-0 z-[1]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_58%_48%_at_50%_46%,rgba(8,12,20,0.12)_0%,rgba(8,12,20,0.22)_48%,rgba(8,12,20,0.92)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]">
        <div className="relative z-[3] text-center">
          <h1 className="mb-[22px] animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] text-[34px] leading-[1.03] font-bold tracking-normal text-onimisea-text-primary opacity-0 motion-reduce:animate-none motion-reduce:opacity-100 min-[360px]:text-[38px] sm:text-[42px] sm2:text-[46px] sm3:text-[50px] md:text-[56px] md3:text-[60px] lg:text-[64px] lg2:text-[66px]">
            I engineer business-critical
            <br />
            software from idea
            <br />
            to <em className="text-onimisea-signal not-italic">production.</em>
          </h1>
          <p className="mx-auto mb-10 max-w-[660px] animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] text-[15px] leading-[1.7] tracking-normal text-onimisea-text-secondary opacity-0 [animation-delay:0.1s] motion-reduce:animate-none motion-reduce:opacity-100 max-md:mb-[26px] sm3:text-base md3:text-[17px]">
            Onimisea is Ahmed Tijani&apos;s personal engineering brand for secure,
            scalable, accessible, high-performance software systems and AI-native
            products. I help remote teams, founders, and businesses turn product ambiguity
            into maintained production systems.
          </p>
          <div className="flex animate-[onimisea-hero-rise_0.72s_cubic-bezier(0.2,0.8,0.2,1)_forwards] flex-wrap items-center justify-center gap-3 opacity-0 [animation-delay:0.2s] motion-reduce:animate-none motion-reduce:opacity-100 max-sm:w-full">
            <a
              href="/contact"
              data-contact-modal
              className="inline-flex min-h-12 items-center justify-center rounded-button bg-onimisea-laterite px-4 py-[14px] text-[13px] font-bold tracking-normal whitespace-nowrap text-onimisea-harmattan no-underline transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-onimisea-laterite/90 hover:shadow-[0_10px_28px_rgba(135,47,24,0.3)] max-sm:w-full sm:px-[26px] sm:text-sm"
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
