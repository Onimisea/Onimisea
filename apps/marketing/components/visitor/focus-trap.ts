export const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",")

export function nextFocusTrapIndex({
  currentIndex,
  count,
  shiftKey,
}: {
  currentIndex: number
  count: number
  shiftKey: boolean
}) {
  if (count <= 0) return -1
  if (shiftKey) return currentIndex <= 0 ? count - 1 : currentIndex - 1
  return currentIndex >= count - 1 ? 0 : currentIndex + 1
}

export function focusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1
  )
}

export function trapTabKey(container: HTMLElement, event: KeyboardEvent) {
  if (event.key !== "Tab") return
  const elements = focusableElements(container)
  if (!elements.length) return
  const currentIndex = Math.max(
    0,
    elements.indexOf(document.activeElement as HTMLElement)
  )
  const nextIndex = nextFocusTrapIndex({
    currentIndex,
    count: elements.length,
    shiftKey: event.shiftKey,
  })
  const next = elements[nextIndex]
  if (!next) return
  event.preventDefault()
  next.focus()
}
