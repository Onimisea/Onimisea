import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <p className="font-mono text-sm text-onimisea-signal">404 / NOT FOUND</p>
        <h1 className="mt-3 text-4xl font-bold">This page is not published.</h1>
        <Link href="/" className="mt-6 inline-block text-onimisea-signal">
          Return home →
        </Link>
      </div>
    </main>
  )
}
