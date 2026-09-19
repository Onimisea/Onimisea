export function ScrollTopButton() {
  return (
    <button
      className="pointer-events-none fixed right-4 bottom-4 z-[95] grid size-12 translate-y-3 place-items-center rounded-full border border-onimisea-laterite/30 bg-onimisea-surface/80 text-onimisea-text-primary opacity-0 shadow-[0_14px_42px_rgba(0,0,0,0.36),0_0_22px_rgba(135,47,24,0.12)] backdrop-blur-xl transition-[opacity,transform,border-color,background,color] duration-200 hover:-translate-y-0.5 hover:border-onimisea-laterite hover:bg-onimisea-laterite/10 hover:text-onimisea-laterite data-[visible=true]:pointer-events-auto data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:right-6 sm:bottom-6"
      id="scroll-top"
      type="button"
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="size-[18px] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
