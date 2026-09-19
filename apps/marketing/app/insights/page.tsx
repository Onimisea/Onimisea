import { redirect } from "next/navigation"

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; tag?: string; period?: string; page?: string }>
}) {
  const params = await searchParams
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => Boolean(value)) as Array<
      [string, string]
    >
  ).toString()
  redirect(query ? `/blog?${query}` : "/blog")
}
