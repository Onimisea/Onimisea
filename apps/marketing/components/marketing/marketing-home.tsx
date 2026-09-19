import { MarketingEffects } from "./marketing-effects"
import {
  AboutSection,
  ContactSection,
  DisciplinesSection,
  FounderSection,
  ProcessSection,
  ProductsSection,
  StackSection,
} from "./sections/content-sections"
import { Footer } from "./sections/footer"
import { Hero } from "./sections/hero"
import { Navigation } from "./sections/navigation"
import { ScrollTopButton } from "./sections/scroll-top-button"
import Link from "next/link"
import { getProjects, getRecentPosts } from "@/lib/public-api"
import { BackendWorkSection } from "@/components/visitor/backend-work-section"
import { PostCard } from "@/components/visitor/post-card"

export async function MarketingHome() {
  const [projects, posts] = await Promise.all([getProjects(), getRecentPosts()])
  return (
    <>
      <MarketingEffects />
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[300] inline-flex min-h-11 -translate-y-[140%] items-center rounded-button border border-onimisea-laterite/40 bg-onimisea-laterite px-4 font-bold text-onimisea-harmattan no-underline transition-transform duration-200 focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-0.5 bg-[linear-gradient(to_right,transparent,var(--onimisea-signal)_25%,var(--onimisea-signal)_75%,transparent)] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-[240] h-[3px] w-full origin-left scale-x-0 bg-onimisea-laterite shadow-[0_0_18px_rgba(135,47,24,0.45)] will-change-transform"
        id="scroll-progress"
        aria-hidden="true"
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <DisciplinesSection />
        <BackendWorkSection projects={projects} />
        <section className="bg-onimisea-deep py-[72px] md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]">
            <p className="font-mono text-xs text-onimisea-signal">
              03 - ENGINEERING THINKING
            </p>
            <div className="mt-3 flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
              <div>
                <h2 className="max-w-[720px] text-3xl leading-tight font-bold text-onimisea-text-primary">
                  The reasoning behind the architecture.
                </h2>
                <p className="mt-3 max-w-2xl text-onimisea-text-secondary">
                  Engineering breakdowns, architecture decisions, and technical
                  post-mortems from the systems above.
                </p>
              </div>
              <Link href="/blog" className="text-onimisea-signal">
                View all posts →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
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
