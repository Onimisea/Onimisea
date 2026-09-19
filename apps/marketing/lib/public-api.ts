type BffEnvelope<T> = { data: T }

export type Project = {
  id: string
  title: string
  slug: string
  live_url: string
  role_type: string
  domain: string
  start_date: string
  end_date: string | null
  stack_tags: string[]
  metrics: Array<{ value: string; label: string }>
  has_case_study: boolean
  post_count: number
}
export type MediaAsset = {
  id: string
  title: string
  url: string
  mime_type: string
  file_size: number
  width: number | null
  height: number | null
  alt_text: string
}
export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  reading_time: number
  published_at: string
  tags: Array<{
    id: string
    name: string
    slug: string
    color: string
    post_count?: number
  }>
  feature_image?: MediaAsset | null
  og_image?: MediaAsset | null
  body_blocks?: Array<{ id: string; type: string; data: Record<string, unknown> }>
  word_count?: number
  seo_title?: string
  seo_description?: string
  related_project?: Project | null
  related_posts?: Post[]
}
export type CaseStudy = {
  id: string
  project: Project
  project_slug: string
  title: string
  tagline: string
  role: string
  domain: string
  timeline: string
  engagement_type: string
  type: string
  overview: string
  metrics: Array<{ value: string; label: string }>
  stack: string[]
  live_url: string
  body_blocks: Array<{ id: string; type: string; data: Record<string, unknown> }>
  related_posts: Post[]
  status: string
  published_at: string | null
}
export type Page<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

async function readBff<T>(path: string, revalidate: number): Promise<T | null> {
  const baseUrl = process.env.BFF_URL
  if (!baseUrl) return null
  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/v1${path}`, {
      next: { revalidate },
    })
    if (!response.ok) return null
    return ((await response.json()) as BffEnvelope<T>).data
  } catch {
    return null
  }
}

export async function getProjects() {
  return (await readBff<Page<Project>>("/projects/", 86_400))?.results ?? []
}
export async function getProject(slug: string) {
  return readBff<Project>(`/projects/${slug}/`, 86_400)
}
export async function getCaseStudy(slug: string) {
  return readBff<CaseStudy>(`/case-studies/${slug}/`, 3600)
}
export async function getPosts(query = "") {
  return readBff<Page<Post>>(`/blog/posts/${query}`, 300)
}
export async function getPost(slug: string) {
  return readBff<Post>(`/blog/posts/${slug}/`, 3600)
}
export async function getTags() {
  return (
    (await readBff<Array<{ id: string; name: string; slug: string; post_count: number }>>(
      "/blog/tags/",
      3600
    )) ?? []
  )
}
export async function getRecentPosts() {
  return (await readBff<Post[]>("/blog/posts/recent/?limit=3", 300)) ?? []
}
