import Link from "next/link"
import { getProjects } from "@/lib/public-api"

export const revalidate = 86_400
export default async function WorkPage() {
  const projects = await getProjects()
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-20">
      <p className="font-mono text-xs text-onimisea-signal">SELECTED WORK</p>
      <h1 className="mb-8 text-5xl font-bold">
        Production systems and engineering proof.
      </h1>
      {projects.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="rounded-card border border-white/10 bg-onimisea-surface p-6 no-underline hover:border-onimisea-signal"
            >
              <p className="font-mono text-xs text-onimisea-signal">
                {project.role_type} / {project.domain}
              </p>
              <h2 className="my-2 text-2xl font-bold text-onimisea-text-primary">
                {project.title}
              </h2>
              <p>{project.stack_tags.join(" · ")}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No published selected work is available yet.</p>
      )}
    </main>
  )
}
