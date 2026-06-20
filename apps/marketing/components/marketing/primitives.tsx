import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"
import type { ReactNode, SVGProps } from "react"

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-8 8 392 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="44" cy="58" r="40" stroke="#007FFF" strokeWidth="6" />
      <circle
        cx="44"
        cy="58"
        r="29"
        stroke="#007FFF"
        strokeDasharray="7 6"
        strokeOpacity=".45"
        strokeWidth="3"
      />
      <line
        x1="-6"
        x2="4"
        y1="46"
        y2="46"
        stroke="#007FFF"
        strokeOpacity=".7"
        strokeWidth="4"
      />
      <line x1="4" x2="100" y1="46" y2="46" stroke="#007FFF" strokeWidth="4" />
      <text
        x="88"
        y="88"
        fill="#F8FAFC"
        fontFamily="DM Sans,Inter,Arial,sans-serif"
        fontSize="86"
        fontWeight="700"
        letterSpacing="-4"
      >
        nimisea
      </text>
      <circle cx="100" cy="46" r="17" fill="#007FFF" fillOpacity=".07" />
      <circle cx="100" cy="46" r="10.5" fill="#007FFF" fillOpacity=".16" />
      <circle cx="100" cy="46" r="6" fill="#007FFF" />
    </svg>
  )
}

export function SectionLabel({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className="mb-12 flex translate-y-0 items-center gap-3 opacity-100 transition-[opacity,transform] duration-700 ease-out data-[animate-pending=true]:translate-y-5 data-[animate-pending=true]:opacity-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
      data-animate="reveal"
    >
      <span className="font-mono text-[10px] font-medium whitespace-nowrap text-onimisea-signal uppercase">
        {children}
      </span>
      <span
        className="h-px flex-1 bg-[linear-gradient(to_right,rgba(0,127,255,0.3),transparent)]"
        aria-hidden="true"
      />
    </div>
  )
}

export function Tag({
  children,
  tone = "default",
}: Readonly<{ children: ReactNode; tone?: "default" | "neutral" | "good" }>) {
  return (
    <span
      className={cn(
        "inline-block rounded-compact border px-[9px] py-[3px] font-mono text-[10px] font-medium tracking-normal",
        tone === "neutral" &&
          "border-white/[0.08] bg-white/[0.04] text-onimisea-text-tertiary",
        tone === "good" && "border-green-400/15 bg-green-500/[0.07] text-green-400",
        tone === "default" &&
          "border-onimisea-signal/15 bg-onimisea-signal/[0.08] text-onimisea-signal"
      )}
    >
      {children}
    </span>
  )
}

export function Icon({ name }: Readonly<{ name: string }>) {
  const iconClass =
    "size-[22px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"

  switch (name) {
    case "server":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <rect x="2" y="3" width="20" height="5" rx="1.5" />
          <rect x="2" y="10" width="20" height="5" rx="1.5" />
          <rect x="2" y="17" width="20" height="5" rx="1.5" />
          <circle cx="6" cy="5.5" r=".9" fill="#007FFF" stroke="none" />
          <circle cx="6" cy="12.5" r=".9" fill="#007FFF" stroke="none" />
          <circle cx="6" cy="19.5" r=".9" fill="#007FFF" stroke="none" />
        </svg>
      )
    case "ai":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <polyline points="8,21 12,17 16,21" />
          <line x1="9" y1="9" x2="10.5" y2="9" />
          <line x1="13.5" y1="9" x2="16" y2="9" />
          <path d="M9 12 l1.5 1.5 L14 9" />
        </svg>
      )
    case "layers":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    case "secure":
    case "shield":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          {name === "shield" ? <path d="M9 12l2 2 4-4" /> : null}
        </svg>
      )
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      )
    case "network":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <rect x="9" y="2" width="6" height="6" />
          <rect x="16" y="16" width="6" height="6" />
          <rect x="2" y="16" width="6" height="6" />
          <path d="M5 8v3a2 2 0 002 2h10a2 2 0 002-2V8" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      )
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className={iconClass}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      )
  }
}

export function ProductVisual({ type }: Readonly<{ type: string }>) {
  const learningNodes = [
    { cx: 70, cy: 34, r: 5, fillOpacity: ".6" },
    { cx: 190, cy: 34, r: 5, fillOpacity: ".6" },
    { cx: 50, cy: 86, r: 4, fillOpacity: ".4" },
    { cx: 210, cy: 86, r: 4, fillOpacity: ".4" },
    { cx: 130, cy: 15, r: 4, fillOpacity: ".4" },
    { cx: 130, cy: 115, r: 4, fillOpacity: ".4" },
  ] as const

  if (type === "fashion") {
    return (
      <Image
        src="/owu-dashboard.png?v=2"
        alt="OWU customer portal dashboard"
        width="260"
        height="130"
        sizes="(max-width: 640px) 100vw, 33vw"
        unoptimized
        className="absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] max-w-none [mask-image:linear-gradient(to_bottom,#000_65%,rgba(0,0,0,0.74)_82%,transparent_100%)] object-cover object-top opacity-80"
      />
    )
  }

  if (type === "safety") {
    return (
      <svg
        width="260"
        height="130"
        viewBox="0 0 260 130"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="130"
          cy="64"
          r="42"
          stroke="#007FFF"
          strokeDasharray="5 5"
          strokeOpacity=".28"
        />
        <circle
          cx="130"
          cy="64"
          r="24"
          stroke="#007FFF"
          strokeOpacity=".38"
          strokeWidth="1.2"
        />
        <circle cx="130" cy="64" r="7" fill="#007FFF" />
        <path
          d="M130 64 C100 28 58 34 42 62 C32 80 42 102 66 106"
          stroke="#007FFF"
          strokeOpacity=".34"
          fill="none"
        />
        <path
          d="M130 64 C160 28 202 34 218 62 C228 80 218 102 194 106"
          stroke="#007FFF"
          strokeOpacity=".34"
          fill="none"
        />
        <circle cx="66" cy="106" r="5" fill="#FFB500" fillOpacity=".75" />
        <circle cx="194" cy="106" r="5" fill="#22C55E" fillOpacity=".75" />
        <circle cx="42" cy="62" r="4" fill="#007FFF" fillOpacity=".55" />
        <circle cx="218" cy="62" r="4" fill="#007FFF" fillOpacity=".55" />
        <path d="M130 31 l8 14 h-16 l8-14z" fill="#FFB500" fillOpacity=".55" />
      </svg>
    )
  }

  if (type === "trading") {
    return (
      <svg
        width="260"
        height="130"
        viewBox="0 0 260 130"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <line x1="18" y1="120" x2="242" y2="120" stroke="#22C55E" strokeOpacity=".18" />
        <line x1="18" y1="88" x2="242" y2="88" stroke="#22C55E" strokeOpacity=".12" />
        <line x1="18" y1="56" x2="242" y2="56" stroke="#22C55E" strokeOpacity=".12" />
        <line x1="18" y1="24" x2="242" y2="24" stroke="#22C55E" strokeOpacity=".12" />
        <polygon
          points="18,108 52,88 78,96 108,56 138,66 164,32 192,42 218,22 242,36 242,120 18,120"
          fill="#22C55E"
          fillOpacity=".05"
        />
        <polyline
          points="18,108 52,88 78,96 108,56 138,66 164,32 192,42 218,22 242,36"
          stroke="#22C55E"
          strokeOpacity=".6"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="164" cy="32" r="4" fill="#007FFF" fillOpacity=".85" />
        <circle cx="218" cy="22" r="4" fill="#007FFF" fillOpacity=".85" />
      </svg>
    )
  }

  return (
    <svg
      width="260"
      height="130"
      viewBox="0 0 260 130"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="130"
        cy="65"
        r="22"
        stroke="#007FFF"
        strokeDasharray="4 3.5"
        strokeWidth="1.5"
      />
      <circle cx="130" cy="65" r="10" fill="#007FFF" fillOpacity=".25" />
      <circle cx="130" cy="65" r="5" fill="#007FFF" />
      {learningNodes.map((node) => (
        <circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="#007FFF"
          fillOpacity={node.fillOpacity}
        />
      ))}
      <line x1="130" y1="55" x2="70" y2="37" stroke="#007FFF" strokeOpacity=".3" />
      <line x1="130" y1="55" x2="190" y2="37" stroke="#007FFF" strokeOpacity=".3" />
      <line x1="130" y1="75" x2="50" y2="83" stroke="#007FFF" strokeOpacity=".2" />
      <line x1="130" y1="75" x2="210" y2="83" stroke="#007FFF" strokeOpacity=".2" />
    </svg>
  )
}
