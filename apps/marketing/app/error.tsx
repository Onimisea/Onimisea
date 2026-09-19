"use client"

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <p className="font-mono text-sm text-onimisea-signal">TEMPORARY ERROR</p>
        <h1 className="mt-3 text-4xl font-bold">The page could not load.</h1>
        <button
          onClick={reset}
          className="mt-6 rounded-button bg-onimisea-signal px-4 py-3 font-bold text-onimisea-cta-ink"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
