"use client"

import { useState } from "react"
import { bffFetch, BffRequestError } from "@workspace/api/browser"

import { mapContactFieldErrors } from "./contact-errors"

export function ContactForm({
  framed = true,
  onSuccess,
  onDirtyChange,
}: {
  framed?: boolean
  onSuccess?: () => void
  onDirtyChange?: (dirty: boolean) => void
}) {
  const [status, setStatus] = useState("")
  const [toast, setToast] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const markDirty = () => onDirtyChange?.(true)
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    setStatus("Sending your message…")
    setToast("")
    setFieldErrors({})
    try {
      const result = await bffFetch<{ message: string }>("/contact/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      })
      setStatus(result.data.message)
      setToast(result.data.message)
      formElement.reset()
      onDirtyChange?.(false)
      onSuccess?.()
    } catch (error) {
      if (error instanceof BffRequestError) {
        const mapped = mapContactFieldErrors(error.details)
        setFieldErrors(mapped.fields)
        setStatus(mapped.form || error.message)
        setToast(mapped.form || error.message)
      } else {
        const message = "Unable to send your message. Please try again."
        setStatus(message)
        setToast(message)
      }
    }
  }
  const error = (name: string) => fieldErrors[name] ?? ""
  return (
    <form
      onSubmit={submit}
      onChange={markDirty}
      className={
        framed
          ? "grid gap-4 rounded-card border border-white/10 bg-onimisea-surface p-5"
          : "grid gap-4"
      }
    >
      <label>
        Full name
        <input
          required
          name="full_name"
          maxLength={150}
          aria-invalid={Boolean(error("full_name"))}
          aria-describedby={error("full_name") ? "full_name-error" : undefined}
          className="mt-1 w-full rounded-button bg-onimisea-base p-3"
        />
        <FieldError id="full_name-error" message={error("full_name")} />
      </label>
      <label>
        Email
        <input
          required
          name="email"
          type="email"
          aria-invalid={Boolean(error("email"))}
          aria-describedby={error("email") ? "email-error" : undefined}
          className="mt-1 w-full rounded-button bg-onimisea-base p-3"
        />
        <FieldError id="email-error" message={error("email")} />
      </label>
      <label>
        What are you building?
        <textarea
          required
          name="what_building"
          minLength={10}
          maxLength={2000}
          aria-invalid={Boolean(error("what_building"))}
          aria-describedby={error("what_building") ? "what_building-error" : undefined}
          className="mt-1 min-h-28 w-full rounded-button bg-onimisea-base p-3"
        />
        <FieldError id="what_building-error" message={error("what_building")} />
      </label>
      <label>
        What help do you need?
        <textarea
          required
          name="what_need"
          minLength={10}
          maxLength={2000}
          aria-invalid={Boolean(error("what_need"))}
          aria-describedby={error("what_need") ? "what_need-error" : undefined}
          className="mt-1 min-h-28 w-full rounded-button bg-onimisea-base p-3"
        />
        <FieldError id="what_need-error" message={error("what_need")} />
      </label>
      <label>
        Stack (optional)
        <input
          name="stack"
          maxLength={200}
          aria-invalid={Boolean(error("stack"))}
          aria-describedby={error("stack") ? "stack-error" : undefined}
          className="mt-1 w-full rounded-button bg-onimisea-base p-3"
        />
        <FieldError id="stack-error" message={error("stack")} />
      </label>
      <label>
        Timeline (optional)
        <select
          name="timeline"
          aria-invalid={Boolean(error("timeline"))}
          aria-describedby={error("timeline") ? "timeline-error" : undefined}
          className="mt-1 w-full rounded-button bg-onimisea-base p-3"
        >
          <option value="">Select a timeline</option>
          <option value="urgent">Urgent — need to move fast</option>
          <option value="1_4_weeks">Ready to start in 1–4 weeks</option>
          <option value="ongoing">Ongoing / long-term</option>
          <option value="exploring">Exploring options</option>
        </select>
        <FieldError id="timeline-error" message={error("timeline")} />
      </label>
      <label>
        How did you find Onimisea? (optional)
        <select
          name="source"
          aria-invalid={Boolean(error("source"))}
          aria-describedby={error("source") ? "source-error" : undefined}
          className="mt-1 w-full rounded-button bg-onimisea-base p-3"
        >
          <option value="">Select a source</option>
          <option value="github">GitHub</option>
          <option value="referral">Referral</option>
          <option value="search">Search</option>
          <option value="linkedin">LinkedIn</option>
          <option value="twitter">Twitter/X</option>
          <option value="other">Other</option>
        </select>
        <FieldError id="source-error" message={error("source")} />
      </label>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <button className="rounded-button bg-onimisea-signal px-5 py-3 font-bold text-onimisea-cta-ink">
        Start the technical conversation
      </button>
      <p role="status" aria-live="polite">
        {status}
      </p>
      {toast ? (
        <div
          role="alert"
          className="fixed right-4 bottom-4 z-[520] max-w-sm rounded-button border border-onimisea-signal/30 bg-onimisea-deep px-4 py-3 text-sm text-onimisea-text-primary shadow-[0_18px_54px_rgba(0,0,0,0.5)]"
        >
          {toast}
        </div>
      ) : null}
    </form>
  )
}

function FieldError({ id, message }: { id: string; message: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1 text-sm text-red-300">
      {message}
    </p>
  )
}
