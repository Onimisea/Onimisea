import { navItems } from "../data"
import { Wordmark } from "../primitives"

const wrapClass = "mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]"

const navLinkClass =
  "relative inline-flex min-h-11 min-w-11 items-center text-[13px] font-medium tracking-normal text-onimisea-text-secondary no-underline transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-onimisea-signal after:opacity-55 after:transition-transform after:duration-200 hover:text-onimisea-text-primary data-[active=true]:text-onimisea-text-primary data-[active=true]:after:scale-x-100"

export function Navigation() {
  return (
    <>
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 z-[100] border-b border-transparent py-[18px] transition-[background,padding,border-color] duration-300 data-[scrolled=true]:border-onimisea-signal/[0.08] data-[scrolled=true]:bg-onimisea-base/95 data-[scrolled=true]:py-[13px] data-[scrolled=true]:backdrop-blur-[14px]"
      >
        <div className={wrapClass}>
          <div className="flex items-center justify-between">
            <a
              href="#hero"
              className="flex min-h-11 items-center no-underline"
              aria-label="Onimisea home"
            >
              <Wordmark className="h-[30px] w-auto transition-opacity duration-200 hover:opacity-85" />
            </a>
            <ul className="nav-links hidden list-none items-center gap-5 md:flex nav:gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-r hidden items-center gap-3 md:flex">
              <a
                href="https://github.com/Onimisea"
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-11 items-center rounded-button border border-white/10 bg-transparent px-4 py-2 text-[13px] font-medium tracking-normal text-onimisea-text-secondary no-underline transition-[background,border-color,color] duration-200 hover:border-onimisea-signal/35 hover:bg-onimisea-signal/[0.05] hover:text-onimisea-text-primary nav:inline-flex"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-button bg-onimisea-signal px-[18px] py-[9px] text-[13px] font-bold tracking-normal text-onimisea-cta-ink no-underline transition-[background,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-onimisea-signal-strong hover:shadow-[0_6px_20px_rgba(14,165,233,0.28)]"
              >
                Work With Me
              </a>
            </div>
            <button
              className="flex size-11 flex-col items-center justify-center gap-[5px] border-0 bg-transparent p-0 md:hidden"
              id="ham"
              type="button"
              aria-label="Open menu"
              aria-controls="mob-nav"
              aria-expanded="false"
            >
              <span className="block h-[1.5px] w-[22px] rounded bg-onimisea-text-secondary transition-all duration-300" />
              <span className="block h-[1.5px] w-[22px] rounded bg-onimisea-text-secondary transition-all duration-300" />
              <span className="block h-[1.5px] w-[22px] rounded bg-onimisea-text-secondary transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className="mob-nav fixed inset-0 z-[180] hidden flex-col items-center justify-center gap-8 bg-onimisea-base/95 backdrop-blur-2xl data-[open=true]:flex"
        id="mob-nav"
        role="dialog"
        aria-label="Site navigation"
        aria-modal="true"
        hidden
      >
        {[...navItems, { href: "#contact", label: "Contact" }].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="inline-flex min-h-11 items-center text-[22px] font-semibold tracking-normal text-onimisea-text-secondary no-underline transition-[color,transform] duration-200 hover:text-onimisea-signal data-[active=true]:translate-x-1 data-[active=true]:text-onimisea-signal"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
