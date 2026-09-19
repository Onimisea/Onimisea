import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ActiveToc } from "@/components/visitor/active-toc"
import { ContentBlocks, extractToc } from "@/components/visitor/content-blocks"
import { PostCard } from "@/components/visitor/post-card"
import { ReadingProgress } from "@/components/visitor/reading-progress"
import { getPost, getPosts } from "@/lib/public-api"
import { onimiseaSite } from "@workspace/brand/next/metadata"

export const revalidate = 3600

export async function generateStaticParams() {
  const firstPage = await getPosts()
  const pages = [firstPage]
  const totalPages = firstPage ? Math.ceil(firstPage.count / 9) : 0
  for (let page = 2; page <= totalPages; page += 1) {
    pages.push(await getPosts(`?page=${page}`))
  }
  return pages.flatMap((page) => page?.results ?? []).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: "Post not found" }
  const image = post.og_image ?? post.feature_image
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      url: `${onimiseaSite.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      authors: [onimiseaSite.personName],
      images: image?.url
        ? [{ url: image.url, alt: image.alt_text || post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      images: image?.url ? [image.url] : undefined,
    },
  }
}

function formatDate(value?: string | null) {
  if (!value) return ""
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()
  const blocks = post.body_blocks ?? []
  const toc = extractToc(blocks)
  const image = post.feature_image ?? post.og_image
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    author: { "@type": "Person", name: onimiseaSite.personName },
    image: image?.url,
    mainEntityOfPage: `${onimiseaSite.url}/blog/${post.slug}`,
  }

  return (
    <main className="min-h-screen bg-onimisea-base">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-6xl px-5 pt-24 pb-20">
        <Link href="/blog" className="text-onimisea-signal">
          ← All posts
        </Link>
        <header className="mt-10 max-w-4xl">
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="rounded-compact bg-onimisea-raised px-3 py-1.5 font-mono text-[11px] text-onimisea-text-tertiary no-underline"
              >
                {tag.name}
              </Link>
            ))}
          </div>
          <h1 className="text-4xl leading-tight font-bold text-onimisea-text-primary md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-onimisea-text-secondary">
            {post.excerpt}
          </p>
          <p className="mt-6 font-mono text-xs text-onimisea-text-muted">
            {formatDate(post.published_at)} · Ahmed Tijani · {post.reading_time} min read
          </p>
        </header>
        {image?.url ? (
          <figure className="mt-10 overflow-hidden rounded-card border border-white/10">
            <Image
              src={image.url}
              alt={image.alt_text || post.title}
              width={Number(image.width ?? 1400)}
              height={Number(image.height ?? 788)}
              unoptimized
              priority
              className="w-full object-cover"
            />
          </figure>
        ) : null}
        <div className="mt-12 grid gap-10 lg:grid-cols-[230px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24" aria-label="Table of contents">
              <p className="mb-3 font-mono text-[11px] text-onimisea-text-muted uppercase">
                Contents
              </p>
              <ActiveToc items={toc} />
            </nav>
          </aside>
          <div className="min-w-0">
            {toc.length ? (
              <details className="mb-8 rounded-card border border-white/10 bg-onimisea-surface p-4 lg:hidden">
                <summary className="cursor-pointer font-semibold text-onimisea-text-primary">
                  Table of contents
                </summary>
                <ol className="mt-4 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-onimisea-signal">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            ) : null}
            <ContentBlocks blocks={blocks} />
            <footer className="mt-12 border-t border-white/10 pt-8">
              <section className="rounded-card border border-white/10 bg-onimisea-surface p-5">
                <p className="font-mono text-xs text-onimisea-signal">AUTHOR</p>
                <h2 className="mt-2 text-2xl font-bold text-onimisea-text-primary">
                  Ahmed Tijani
                </h2>
                <p className="mt-2 text-onimisea-text-secondary">
                  {onimiseaSite.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={onimiseaSite.githubUrl} className="text-onimisea-signal">
                    GitHub
                  </a>
                  <a href={onimiseaSite.url} className="text-onimisea-signal">
                    onimisea.com
                  </a>
                </div>
              </section>
              {post.related_posts?.length ? (
                <section className="mt-10">
                  <h2 className="mb-4 text-2xl font-bold text-onimisea-text-primary">
                    More like this
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {post.related_posts.map((related) => (
                      <PostCard key={related.id} post={related} />
                    ))}
                  </div>
                </section>
              ) : null}
              {post.related_project ? (
                <section className="mt-10 rounded-card border border-onimisea-signal/20 bg-onimisea-signal/[0.06] p-5">
                  <h2 className="text-xl font-bold text-onimisea-text-primary">
                    Related case study
                  </h2>
                  <p className="mt-2 text-onimisea-text-secondary">
                    This post connects to {post.related_project.title}.
                  </p>
                  <Link
                    href={`/#case-study-${post.related_project.slug}`}
                    className="mt-4 inline-flex text-onimisea-signal"
                  >
                    Open case study →
                  </Link>
                </section>
              ) : null}
              <section className="mt-10 rounded-card border border-white/10 bg-onimisea-surface p-5">
                <h2 className="text-xl font-bold text-onimisea-text-primary">
                  Found this useful?
                </h2>
                <button
                  type="button"
                  data-contact-modal
                  className="mt-4 rounded-button bg-onimisea-signal px-5 py-3 font-bold text-onimisea-cta-ink"
                >
                  Let&apos;s work together
                </button>
              </section>
            </footer>
          </div>
        </div>
      </article>
    </main>
  )
}
