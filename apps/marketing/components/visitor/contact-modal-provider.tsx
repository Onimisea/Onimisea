"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { ContactForm } from "./contact-form"
import { trapTabKey } from "./focus-trap"

export function ContactModalProvider() {
  const [open, setOpen] = useState(false)
  const [dirty, setDirty] = useState(false)
  const dialogRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedRef = useRef<Element | null>(null)

  const close = useCallback(() => {
    if (dirty && !window.confirm("Discard this unfinished message?")) return
    setDirty(false)
    setOpen(false)
  }, [dirty])

  useEffect(() => {
    function openModal(event: Event) {
      event.preventDefault()
      setOpen(true)
    }
    function click(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const trigger = target.closest("[data-contact-modal]")
      if (trigger) openModal(event)
    }
    function custom() {
      setOpen(true)
    }
    document.addEventListener("click", click)
    window.addEventListener("onimisea:open-contact", custom)
    return () => {
      document.removeEventListener("click", click)
      window.removeEventListener("onimisea:open-contact", custom)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    previouslyFocusedRef.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") close()
      if (dialogRef.current) trapTabKey(dialogRef.current, event)
    }
    document.addEventListener("keydown", keydown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", keydown)
      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus()
      }
    }
  }, [close, open])

  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[500] overflow-y-auto bg-onimisea-void/88 px-4 py-6 backdrop-blur-md"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="mx-auto w-full max-w-2xl rounded-card border border-onimisea-signal/25 bg-onimisea-surface p-5 shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-7"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-onimisea-signal">REMOTE ENGAGEMENT</p>
            <h2
              id="contact-modal-title"
              className="mt-2 text-3xl leading-tight font-bold"
            >
              Start with the technical problem.
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="rounded-button border border-white/15 px-3 py-2 font-mono text-xs text-onimisea-text-secondary"
            aria-label="Close contact form"
          >
            Close
          </button>
        </div>
        <ContactForm
          framed={false}
          onDirtyChange={setDirty}
          onSuccess={() => setDirty(false)}
        />
      </section>
    </div>
  )
}
