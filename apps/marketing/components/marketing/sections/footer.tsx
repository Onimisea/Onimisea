export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-onimisea-void py-[34px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(235,229,218,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(235,229,218,0.055)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_100%_at_50%_50%,#000_0%,transparent_82%)] bg-[length:44px_44px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 xl:max-w-[1240px]">
        <div className="relative z-[1] flex items-center justify-center text-center">
          <div className="font-mono text-[11px] tracking-normal text-onimisea-text-muted">
            © 2026 Ahmed Tijani · Onimisea · Engineering secure, scalable AI-native
            systems.
          </div>
        </div>
      </div>
    </footer>
  )
}
