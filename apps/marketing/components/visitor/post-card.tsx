import Image from "next/image"
import Link from "next/link"

import type { Post } from "@/lib/public-api"

function formatDate(value?: string | null) {
  if (!value) return ""
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value))
}

export function PostCard({ post }: { post: Post }) {
  const image = post.feature_image ?? post.og_image
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex min-h-[320px] flex-col overflow-hidden rounded-card border border-white/10 bg-onimisea-surface no-underline transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-onimisea-signal/35 hover:shadow-[0_18px_48px_rgba(0,0,0,0.38)]"
    >
      <div className="relative aspect-video overflow-hidden bg-onimisea-raised">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt_text || post.title}
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(135,47,24,0.22),rgba(11,8,6,0.6)_42%,rgba(11,8,6,0.95))]" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag.id}
              className="rounded-compact bg-onimisea-raised px-2 py-1 font-mono text-[10px] text-onimisea-text-tertiary"
            >
              {tag.name}
            </span>
          ))}
          {post.tags.length > 2 ? (
            <span className="rounded-compact bg-onimisea-raised px-2 py-1 font-mono text-[10px] text-onimisea-text-tertiary">
              +{post.tags.length - 2}
            </span>
          ) : null}
        </div>
        <h2 className="line-clamp-2 text-xl leading-tight font-bold text-onimisea-text-primary">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-onimisea-text-secondary">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 font-mono text-[11px] text-onimisea-text-muted">
          <span>{post.reading_time} min read</span>
          <span>{formatDate(post.published_at)}</span>
        </div>
        <span className="mt-4 text-sm font-semibold text-onimisea-signal">
          Read post →
        </span>
      </div>
    </Link>
  )
}
