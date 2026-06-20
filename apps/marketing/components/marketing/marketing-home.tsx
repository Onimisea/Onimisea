import { MarketingEffects } from "./marketing-effects"
import {
  AboutSection,
  ContactSection,
  DisciplinesSection,
  FounderSection,
  ProcessSection,
  ProductsSection,
  StackSection,
  WorkSection,
} from "./sections/content-sections"
import { Footer } from "./sections/footer"
import { Hero } from "./sections/hero"
import { Navigation } from "./sections/navigation"
import { ScrollTopButton } from "./sections/scroll-top-button"

export function MarketingHome() {
  return (
    <>
      <MarketingEffects />
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[300] inline-flex min-h-11 -translate-y-[140%] items-center rounded-button border border-onimisea-signal/40 bg-onimisea-signal px-4 font-bold text-onimisea-cta-ink no-underline transition-transform duration-200 focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-0.5 bg-[linear-gradient(to_right,transparent,var(--onimisea-signal)_25%,var(--onimisea-signal)_75%,transparent)] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-[240] h-[3px] w-full origin-left scale-x-0 bg-[linear-gradient(90deg,var(--onimisea-signal),#99ccff,var(--onimisea-signal))] shadow-[0_0_18px_rgba(0,127,255,0.45)] will-change-transform"
        id="scroll-progress"
        aria-hidden="true"
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <DisciplinesSection />
        <WorkSection />
        <ProductsSection />
        <ProcessSection />
        <StackSection />
        <FounderSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
