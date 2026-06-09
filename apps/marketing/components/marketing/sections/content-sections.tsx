import { cn } from "@workspace/ui/lib/utils"

import {
  aboutMeta,
  credentials,
  disciplines,
  founderRows,
  processSteps,
  products,
  stackGroups,
  workItems,
} from "../data"
import { Icon, ProductVisual, SectionLabel, Tag } from "../primitives"

const wrapClass = "mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]"
const sectionClass = "scroll-mt-[86px] py-[72px] md:py-24"
const sectionHeaderClass =
  "mb-10 flex translate-y-0 items-end justify-between gap-8 opacity-100 transition-[opacity,transform] duration-700 ease-out data-[animate-pending=true]:translate-y-5 data-[animate-pending=true]:opacity-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-lg:flex-col max-lg:items-start"
const sectionTitleClass =
  "max-w-[720px] text-[24px] font-bold leading-[1.12] tracking-normal text-onimisea-text-primary sm2:text-[28px] md:text-[32px] lg:text-[36px]"
const introClass = "max-w-[540px] text-[15px] leading-[1.7] text-onimisea-text-secondary"
const blueCardHover =
  "hover:-translate-y-1 hover:border-onimisea-signal/25 hover:bg-[radial-gradient(ellipse_84%_74%_at_50%_0%,rgba(14,165,233,0.15),rgba(14,165,233,0.045)_44%,transparent_80%),var(--onimisea-surface)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.42)]"
const cardClass = cn(
  "min-w-0 overflow-hidden rounded-card border border-white/[0.06] bg-onimisea-surface transition-[background,border-color,transform,box-shadow] duration-300",
  blueCardHover
)
const revealClass =
  "translate-y-0 opacity-100 transition-[opacity,transform,background,border-color,box-shadow] duration-700 ease-out data-[animate-pending=true]:translate-y-5 data-[animate-pending=true]:opacity-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
const primaryButtonClass =
  "inline-flex min-h-12 items-center justify-center rounded-button bg-onimisea-signal px-[26px] py-[14px] text-sm font-bold tracking-normal text-onimisea-cta-ink no-underline transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-onimisea-signal-strong hover:shadow-[0_10px_28px_rgba(14,165,233,0.3)]"

export function DisciplinesSection() {
  return (
    <section id="disciplines" className={cn(sectionClass, "bg-onimisea-deep")}>
      <div className={wrapClass}>
        <SectionLabel>01 - What I Build</SectionLabel>
        <div className={sectionHeaderClass} data-animate="reveal">
          <h2 className={sectionTitleClass}>
            End-to-end engineering.
            <br />
            No handoffs. No gaps.
          </h2>
          <p className={introClass}>
            I own full delivery: schema design, backend APIs, frontend systems, AI
            integration, production deployment, and ongoing security hardening.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[14px]">
          {disciplines.map((discipline) => (
            <article
              key={discipline.title}
              className={cn(
                cardClass,
                revealClass,
                "relative p-6 after:absolute after:inset-x-0 after:top-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-onimisea-signal after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 sm:p-7"
              )}
              data-animate="reveal"
            >
              <div
                className="mb-5 flex size-11 items-center justify-center rounded-[11px] bg-onimisea-signal/10 text-onimisea-signal"
                aria-hidden="true"
              >
                <Icon name={discipline.icon} />
              </div>
              <h3 className="mb-2.5 text-base font-semibold tracking-normal text-onimisea-text-primary">
                {discipline.title}
              </h3>
              <p className="mb-4 text-[13px] leading-[1.65] text-onimisea-text-secondary">
                {discipline.description}
              </p>
              <div className="flex flex-wrap gap-[5px]">
                {discipline.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkSection() {
  return (
    <section id="work" className={cn(sectionClass, "bg-onimisea-base")}>
      <div className={wrapClass}>
        <SectionLabel>02 - Selected Work</SectionLabel>
        <div className={sectionHeaderClass} data-animate="reveal">
          <h2 className={sectionTitleClass}>
            Production systems with measurable outcomes.
          </h2>
          <p className={introClass}>
            Every engagement is backed by shipped code, real users, and business impact
            you can trace directly to engineering decisions.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[14px]">
          {workItems.map((item) => (
            <article
              key={item.company}
              className={cn(cardClass, revealClass, "flex flex-col p-6")}
              data-animate="reveal"
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-x-3.5 gap-y-2.5">
                <div>
                  <h3 className="text-[17px] font-bold tracking-normal text-onimisea-text-primary">
                    {item.company}
                  </h3>
                  <div className="mb-3 font-mono text-[10px] tracking-normal text-onimisea-text-muted">
                    {item.period}
                  </div>
                </div>
                <span className="inline-block rounded-compact border border-onimisea-judgment/15 bg-onimisea-judgment/[0.09] px-[9px] py-[3px] text-right font-mono text-[9px] leading-[1.35] font-semibold tracking-normal whitespace-normal text-onimisea-judgment">
                  {item.badge}
                </span>
              </div>
              <p className="mb-[18px] flex-1 text-[13px] leading-[1.65] text-onimisea-text-secondary">
                {item.description}
              </p>
              <div
                className={cn(
                  "mb-4 grid grid-cols-2 gap-2.5 rounded-compact border border-onimisea-signal/[0.08] bg-onimisea-signal/[0.04] p-3.5",
                  item.featured && "lg:grid-cols-4"
                )}
              >
                {item.metrics.map(([value, label]) => (
                  <div key={`${item.company}-${label}`}>
                    <div className="text-[17px] leading-none font-bold tracking-normal text-onimisea-signal">
                      {value}
                    </div>
                    <div className="mt-[3px] font-mono text-[9px] font-medium tracking-normal text-onimisea-text-muted uppercase">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-3.5 flex flex-wrap gap-[5px]">
                {item.stack.map((tag) => (
                  <Tag key={`${item.company}-${tag}`}>{tag}</Tag>
                ))}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center self-end font-mono text-[10px] font-medium tracking-normal text-onimisea-signal no-underline transition-[gap] duration-200 hover:gap-[7px]"
                >
                  {item.linkLabel ?? "View project"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className={cn(sectionClass, "bg-onimisea-deep")}>
      <div className={wrapClass}>
        <SectionLabel>{"// 03 - Product Ecosystem"}</SectionLabel>
        <div className={sectionHeaderClass} data-animate="reveal">
          <h2 className={sectionTitleClass}>
            Building AI-native products
            <br />
            under the Onimisea brand.
          </h2>
          <p className={cn(introClass, "mb-0")}>
            Beyond client work, I&apos;m the founder building the Onimisea product
            ecosystem. Onimisea Group is the future holding company for these products.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[14px]">
          {products.map((product) => (
            <article
              key={product.name}
              className={cn(cardClass, revealClass)}
              data-animate="reveal"
            >
              <div
                className={cn(
                  "relative flex h-[168px] items-center justify-center overflow-hidden [&_svg]:opacity-65",
                  product.visual === "trading"
                    ? "bg-[linear-gradient(135deg,var(--onimisea-raised)_0%,#091a10_100%)]"
                    : "bg-[linear-gradient(135deg,var(--onimisea-raised)_0%,#091834_100%)]"
                )}
              >
                <ProductVisual type={product.visual} />
                <div className="absolute top-3 right-3 inline-flex items-center gap-[5px] rounded-full border border-onimisea-signal/25 bg-onimisea-signal/10 px-2.5 py-1 font-mono text-[9px] font-semibold tracking-normal text-onimisea-signal uppercase">
                  <span className="size-[5px] animate-[onimisea-pulse-dot_2s_infinite] rounded-full bg-onimisea-signal motion-reduce:animate-none" />
                  {product.status}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-[7px] font-mono text-[9px] font-medium tracking-normal text-onimisea-text-muted uppercase">
                  {product.eyebrow}
                </div>
                <h3 className="mb-[9px] text-xl font-bold tracking-normal text-onimisea-text-primary">
                  {product.name}
                </h3>
                <p className="mb-4 text-[13px] leading-[1.65] text-onimisea-text-secondary">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-[5px]">
                  {product.tags.map((tag) => (
                    <Tag key={`${product.name}-${tag}`}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className={cn(sectionClass, "relative overflow-hidden bg-onimisea-base")}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_46%_54%_at_50%_48%,rgba(14,165,233,0.075)_0%,rgba(14,165,233,0.028)_38%,transparent_76%)]"
        aria-hidden="true"
      />
      <div className={cn(wrapClass, "relative z-[1]")}>
        <SectionLabel>{"// 04 - Engineering Lifecycle"}</SectionLabel>
        <div className={sectionHeaderClass} data-animate="reveal">
          <h2 className={sectionTitleClass}>
            From business goals to continuous improvement.
          </h2>
          <p className={introClass}>
            The delivery model is structured around product clarity, architectural
            judgment, secure execution, and long-term operational ownership.
          </p>
        </div>
        <div className="relative z-[1] grid grid-cols-1 gap-[14px] sm:grid-cols-2 md2:grid-cols-3 lg3:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className={cn(
                revealClass,
                "relative z-[1] flex min-h-[172px] flex-col items-start overflow-hidden rounded-card border border-white/[0.07] bg-[linear-gradient(180deg,rgba(26,35,55,0.88),rgba(17,24,39,0.98))] p-6 text-left before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[linear-gradient(90deg,var(--onimisea-signal),rgba(14,165,233,0.08))] before:content-[''] after:absolute after:top-[22px] after:right-[22px] after:size-[9px] after:rounded-full after:bg-onimisea-signal after:shadow-[0_0_0_8px_rgba(14,165,233,0.08)] after:content-[''] hover:-translate-y-1 hover:border-onimisea-signal/30 hover:bg-[radial-gradient(ellipse_86%_78%_at_50%_0%,rgba(14,165,233,0.16),rgba(14,165,233,0.05)_46%,transparent_82%),linear-gradient(180deg,rgba(26,35,55,0.88),rgba(17,24,39,0.98))] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
              )}
              data-animate="reveal"
            >
              <div className="mb-[46px] flex rounded-compact border border-onimisea-signal/25 bg-onimisea-signal/[0.07] px-[9px] py-1 font-mono text-[11px] font-bold tracking-normal text-onimisea-signal transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[15px] leading-[1.24] font-bold tracking-normal text-onimisea-text-primary">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StackSection() {
  return (
    <section id="stack" className={cn(sectionClass, "bg-onimisea-deep")}>
      <div className={wrapClass}>
        <SectionLabel>{"// 05 - Technical Stack"}</SectionLabel>
        <div className={sectionHeaderClass} data-animate="reveal">
          <h2 className={sectionTitleClass}>
            Breadth with depth.
            <br />
            Every layer in production.
          </h2>
          <p className={introClass}>
            I don&apos;t just know these tools theoretically; every item below has shipped
            in a production system under real load with real users.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.label}
              className={cn(cardClass, revealClass, "p-[22px]")}
              data-animate="reveal"
            >
              <h3 className="mb-3.5 border-b border-onimisea-signal/10 pb-3 font-mono text-[10px] font-semibold tracking-normal text-onimisea-signal uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={`${group.label}-${item}`}
                    className="inline-flex items-center rounded-compact border border-white/[0.07] bg-white/[0.04] px-[11px] py-[5px] font-mono text-[11px] font-medium tracking-normal text-onimisea-text-secondary transition-[background,border-color,color] duration-200 hover:border-onimisea-signal/25 hover:bg-onimisea-signal/[0.06] hover:text-onimisea-signal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FounderSection() {
  return (
    <section id="founder" className={cn(sectionClass, "bg-onimisea-base")}>
      <div className={wrapClass}>
        <SectionLabel>{"// 06 - Founder Signal"}</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1fr] lg:gap-[52px]">
          <div className={revealClass} data-animate="reveal">
            <h2 className={cn(sectionTitleClass, "mb-3.5")}>
              Senior engineering without corporate theater.
            </h2>
            <p className="mb-3.5 text-[15px] leading-[1.75] text-onimisea-text-secondary">
              Companies do not need another generic developer profile. They need someone
              who understands business constraints, technical debt, security boundaries,
              delivery pressure, and how to turn product ambiguity into a maintainable
              system.
            </p>
          </div>
          <div
            className={cn(
              revealClass,
              "grid gap-2.5 rounded-card border border-white/[0.07] bg-onimisea-surface/55 p-3 shadow-[0_18px_56px_rgba(0,0,0,0.28)]"
            )}
            data-animate="reveal"
          >
            <div className="grid grid-cols-1 gap-1 rounded-button border border-onimisea-signal/25 bg-onimisea-void px-[18px] py-4 font-mono text-[10px] font-semibold tracking-normal text-onimisea-text-muted uppercase sm:grid-cols-[0.82fr_1fr] sm:gap-4">
              <span className="text-onimisea-signal">Engagement</span>
              <span>Best fit</span>
            </div>
            {founderRows.map(([engagement, bestFit]) => (
              <div
                key={engagement}
                className="grid grid-cols-1 items-center gap-1 rounded-button border border-white/[0.07] bg-onimisea-base/50 px-[18px] py-4 text-[13px] text-onimisea-text-secondary transition-[background,border-color] duration-200 hover:border-onimisea-signal/25 hover:bg-onimisea-signal/[0.045] sm:grid-cols-[0.82fr_1fr] sm:gap-4"
              >
                <span className="font-bold text-onimisea-text-primary">{engagement}</span>
                <span>{bestFit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className={cn(sectionClass, "bg-onimisea-base")}>
      <div className={wrapClass}>
        <SectionLabel>{"// 07 - About Ahmed"}</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-11 lg:grid-cols-2 lg:gap-[72px]">
          <div className={revealClass} data-animate="reveal">
            <h2 className={sectionTitleClass}>
              Engineering is the{" "}
              <em className="text-onimisea-signal not-italic">business strategy.</em>
            </h2>
            <p className="mt-[22px] mb-3.5 text-[15px] leading-[1.75] text-onimisea-text-secondary">
              I&apos;m Ahmed Tijani, the engineer behind the <strong>Onimisea</strong>{" "}
              personal brand. I&apos;ve spent 7+ years building production systems across
              fintech, e-learning, supply-chain, Web3, and SaaS platforms.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.75] text-onimisea-text-secondary">
              I don&apos;t separate &quot;technical&quot; from &quot;business.&quot; Every
              architecture decision, every API contract, every deployment choice is made
              in service of a measurable outcome. At Accessivo, I was the sole engineer
              who took a fintech product from zero to 6,700+ users processing ₦35M+ in
              transactions. That&apos;s what full ownership means.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.75] text-onimisea-text-secondary">
              Currently building Onimisera, an AI-native learning platform for Nigerian
              university students, while actively available for remote engineering and
              consulting roles globally.
            </p>
            <div className="mt-[30px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              {aboutMeta.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] font-semibold tracking-normal text-onimisea-text-muted uppercase">
                    {label}
                  </span>
                  <span
                    className={cn(
                      "text-[13px] font-semibold text-onimisea-text-primary",
                      label === "Availability" && "text-green-400"
                    )}
                  >
                    {value}
                  </span>
                </div>
              ))}
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] font-semibold tracking-normal text-onimisea-text-muted uppercase">
                  Portfolio
                </span>
                <span className="text-[13px] font-semibold text-onimisea-text-primary">
                  <a
                    href="https://onimisea.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center text-onimisea-signal no-underline hover:underline"
                  >
                    onimisea.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {credentials.map(([title, subtitle, icon]) => (
              <article
                key={title}
                className={cn(
                  cardClass,
                  revealClass,
                  "flex items-center gap-3.5 p-[18px_20px]"
                )}
                data-animate="reveal"
              >
                <div
                  className="flex size-[38px] shrink-0 items-center justify-center rounded-compact bg-onimisea-signal/10 text-onimisea-signal [&_svg]:size-[18px]"
                  aria-hidden="true"
                >
                  <Icon name={icon} />
                </div>
                <div>
                  <h3 className="mb-px text-[13px] font-semibold tracking-normal text-onimisea-text-primary">
                    {title}
                  </h3>
                  <div className="text-xs text-onimisea-text-tertiary">{subtitle}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className={cn(sectionClass, "relative overflow-hidden bg-onimisea-void")}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_92%,rgba(14,165,233,0.13)_0%,rgba(14,165,233,0.045)_42%,transparent_82%)]"
        aria-hidden="true"
      />
      <div className={wrapClass}>
        <div
          className={cn(
            revealClass,
            "relative z-[1] overflow-hidden rounded-card border border-onimisea-signal/25 bg-[linear-gradient(135deg,rgba(14,165,233,0.14),transparent_34%),var(--onimisea-surface)] p-7 text-left shadow-[0_22px_70px_rgba(0,0,0,0.34)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_48%_58%_at_18%_8%,rgba(14,165,233,0.13),transparent_72%)] before:content-[''] md:p-[54px]"
          )}
          data-animate="reveal"
        >
          <p className="relative z-[1] mb-[18px] flex items-center gap-3 font-mono text-[11px] font-semibold tracking-normal text-onimisea-signal uppercase before:h-px before:w-[34px] before:bg-current before:content-['']">
            Remote engagement
          </p>
          <h2 className={cn(sectionTitleClass, "relative z-[1] mb-7 max-w-[820px]")}>
            Bring Onimisea in when the technical direction must survive real users, real
            data, and real business pressure.
          </h2>
          <div className="relative z-[1] mb-7 flex flex-wrap items-center gap-3">
            <a
              className={cn(primaryButtonClass, "max-md:w-full")}
              href="mailto:onimisea@gmail.com?subject=Remote%20CTO-level%20engineering%20engagement"
            >
              Start the technical conversation
            </a>
          </div>
          <div className="relative z-[1] flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="mailto:onimisea@gmail.com"
              className="inline-flex min-h-11 items-center gap-[7px] rounded-button border border-white/[0.09] bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] font-medium tracking-normal text-onimisea-text-secondary no-underline transition-[background,border-color,color] duration-200 hover:border-onimisea-signal hover:bg-onimisea-signal/[0.08] hover:text-onimisea-signal [&_svg]:size-[13px] [&_svg]:stroke-2"
            >
              <Icon name="mail" />
              onimisea@gmail.com
            </a>
            <a
              href="https://github.com/Onimisea"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-[7px] rounded-button border border-white/[0.09] bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] font-medium tracking-normal text-onimisea-text-secondary no-underline transition-[background,border-color,color] duration-200 hover:border-onimisea-signal hover:bg-onimisea-signal/[0.08] hover:text-onimisea-signal [&_svg]:size-[13px] [&_svg]:stroke-2"
            >
              <Icon name="network" />
              github.com/Onimisea
            </a>
            <a
              href="tel:+2348034023726"
              className="inline-flex min-h-11 items-center gap-[7px] rounded-button border border-white/[0.09] bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] font-medium tracking-normal text-onimisea-text-secondary no-underline transition-[background,border-color,color] duration-200 hover:border-onimisea-signal hover:bg-onimisea-signal/[0.08] hover:text-onimisea-signal [&_svg]:size-[13px] [&_svg]:stroke-2"
            >
              <Icon name="signal" />
              +234 803 402 3726
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
