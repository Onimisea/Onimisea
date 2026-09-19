import { ContactForm } from "@/components/visitor/contact-form"

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-20">
      <p className="font-mono text-xs text-onimisea-signal">CONTACT</p>
      <h1 className="my-4 text-5xl font-bold">Start with the technical problem.</h1>
      <p className="mb-8 text-xl text-onimisea-text-secondary">
        Share enough context to make a useful first conversation possible.
      </p>
      <ContactForm />
    </main>
  )
}
