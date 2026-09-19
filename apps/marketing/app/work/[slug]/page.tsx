import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentBlocks } from "@/components/visitor/content-blocks"
import { getCaseStudy, getProject } from "@/lib/public-api"

export const revalidate = 3600
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  return {
    title: project?.title ?? "Selected work",
    description: project
      ? `${project.role_type} engineering work in ${project.domain}.`
      : undefined,
  }
}
export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()
  const caseStudy = project.has_case_study ? await getCaseStudy(slug) : null
  const blocks = Array.isArray(caseStudy?.body_blocks)
    ? (caseStudy.body_blocks as Array<{
        id: string
        type: string
        data: Record<string, unknown>
      }>)
    : []
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-20">
      <Link href="/work" className="text-onimisea-signal">
        ← Selected work
      </Link>
      <p className="mt-10 font-mono text-xs text-onimisea-signal">
        {project.role_type} / {project.domain}
      </p>
      <h1 className="my-3 text-5xl font-bold">{project.title}</h1>
      <p className="mb-8">{project.stack_tags.join(" · ")}</p>
      {caseStudy ? (
        <>
          <p className="mb-8 text-xl">{String(caseStudy.overview ?? "")}</p>
          <ContentBlocks blocks={blocks} />
        </>
      ) : (
        <p>This project has no published case study yet.</p>
      )}
    </main>
  )
}
