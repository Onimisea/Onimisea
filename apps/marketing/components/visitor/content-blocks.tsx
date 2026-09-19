import Image from "next/image"
import {
  highlightCodeTokens,
  normalizeChecklistItems,
  normalizeTableRows,
} from "./content-rendering"

type Block = { id: string; type: string; data: Record<string, unknown> }
export type TocItem = { id: string; text: string; level: number }

export function plainText(value: unknown) {
  return typeof value === "string" ? value.replace(/<[^>]+>/g, "") : ""
}

function safeHtml(value: unknown) {
  return typeof value === "string" ? value : ""
}

export function slugifyHeading(value: unknown) {
  return plainText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractToc(blocks: Block[]): TocItem[] {
  return blocks
    .filter((block) => block.type === "heading")
    .map((block) => ({
      id: slugifyHeading(block.data.text),
      text: plainText(block.data.text),
      level: Number(block.data.level ?? 2),
    }))
    .filter((item) => item.text && [2, 3].includes(item.level))
}

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-7 text-onimisea-text-secondary">
      {blocks.map((block) => {
        const data = block.data
        if (block.type === "heading") {
          const level = Number(data.level ?? 2)
          const headingClass =
            level >= 3
              ? "text-2xl font-bold leading-tight text-onimisea-text-primary"
              : "text-3xl font-bold leading-tight text-onimisea-text-primary"
          return (
            <h2 id={slugifyHeading(data.text)} key={block.id} className={headingClass}>
              {plainText(data.text)}
            </h2>
          )
        }
        if (block.type === "quote")
          return (
            <blockquote
              key={block.id}
              className="rounded-r-card border-l-2 border-onimisea-signal bg-onimisea-signal/[0.06] py-4 pr-5 pl-5 text-xl leading-relaxed text-onimisea-text-primary"
            >
              {plainText(data.text)}
            </blockquote>
          )
        if (block.type === "code")
          return (
            <pre
              key={block.id}
              data-language={plainText(data.language) || "text"}
              className="overflow-x-auto rounded-card border border-white/10 bg-onimisea-void p-5 font-mono text-sm leading-6"
            >
              <code>
                {highlightCodeTokens(plainText(data.code), plainText(data.language)).map(
                  (token, index) => (
                    <span
                      key={`${block.id}-${index}`}
                      className={
                        token.kind === "keyword"
                          ? "code-token-keyword text-onimisea-signal"
                          : token.kind === "literal"
                            ? "code-token-literal text-onimisea-judgment"
                            : token.kind === "string"
                              ? "code-token-string text-emerald-300"
                              : token.kind === "comment"
                                ? "code-token-comment text-onimisea-text-muted"
                                : undefined
                      }
                    >
                      {token.value}
                    </span>
                  )
                )}
              </code>
            </pre>
          )
        if (block.type === "checklist") {
          const items = normalizeChecklistItems(data)
          return (
            <ul key={block.id} className="space-y-3">
              {items.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    className="mt-1 h-4 w-4 rounded border-white/20"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === "table") {
          const rows = normalizeTableRows(data)
          if (!rows.length) return null
          const [head, ...body] = rows
          return (
            <div
              key={block.id}
              className="overflow-x-auto rounded-card border border-white/10 bg-onimisea-surface"
            >
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr>
                    {head?.map((cell) => (
                      <th
                        key={cell}
                        className="border-b border-white/10 p-3 font-mono text-[11px] text-onimisea-signal uppercase"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row) => (
                    <tr key={row.join("-")} className="border-t border-white/5">
                      {row.map((cell, index) => (
                        <td key={`${cell}-${index}`} className="p-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        if (block.type === "list")
          return (
            <ul key={block.id} className="list-disc space-y-2 pl-6">
              {Array.isArray(data.items)
                ? data.items.map((item) => <li key={String(item)}>{plainText(item)}</li>)
                : null}
            </ul>
          )
        if (block.type === "callout")
          return (
            <aside
              key={block.id}
              className="rounded-card border border-onimisea-signal/25 bg-onimisea-signal/[0.07] p-5 text-onimisea-text-primary"
            >
              <p dangerouslySetInnerHTML={{ __html: safeHtml(data.text) }} />
            </aside>
          )
        if (block.type === "warning")
          return (
            <aside
              key={block.id}
              className="rounded-card border border-onimisea-judgment/25 bg-onimisea-judgment/[0.08] p-5"
            >
              <p className="font-mono text-xs text-onimisea-judgment uppercase">
                {plainText(data.title) || "Warning"}
              </p>
              <p className="mt-2 text-onimisea-text-primary">
                {plainText(data.message) || plainText(data.text)}
              </p>
            </aside>
          )
        if (block.type === "metric_grid") {
          const metrics = Array.isArray(data.metrics) ? data.metrics : []
          return (
            <div key={block.id} className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => {
                const record =
                  metric && typeof metric === "object"
                    ? (metric as Record<string, unknown>)
                    : {}
                return (
                  <div
                    key={`${record.value}-${record.label}`}
                    className="rounded-compact border border-onimisea-signal/15 bg-onimisea-signal/[0.06] p-4"
                  >
                    <p className="text-2xl font-bold text-onimisea-signal">
                      {plainText(record.value)}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-onimisea-text-muted uppercase">
                      {plainText(record.label)}
                    </p>
                  </div>
                )
              })}
            </div>
          )
        }
        if (block.type === "embed")
          return (
            <figure
              key={block.id}
              className="rounded-card border border-white/10 bg-onimisea-surface p-4"
            >
              <a
                href={plainText(data.url)}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-onimisea-signal"
              >
                {plainText(data.caption) || plainText(data.url)}
              </a>
            </figure>
          )
        if (block.type === "image" || block.type === "architecture_diagram")
          return (
            <figure key={block.id}>
              <Image
                src={plainText(data.url)}
                alt={plainText(data.alt)}
                width={Number(data.width ?? 1200)}
                height={Number(data.height ?? 675)}
                unoptimized
                className="w-full rounded-card border border-white/10"
              />
              <figcaption className="mt-2 text-sm text-onimisea-text-muted">
                {plainText(data.caption) || plainText(data.alt)}
              </figcaption>
            </figure>
          )
        if (block.type === "delimiter")
          return <hr key={block.id} className="border-white/10" />
        if (block.type === "raw")
          return (
            <pre
              key={block.id}
              className="overflow-x-auto rounded-card bg-onimisea-void p-4 text-sm"
            >
              {plainText(data.html)}
            </pre>
          )
        return (
          <p
            key={block.id}
            className="leading-8"
            dangerouslySetInnerHTML={{
              __html: safeHtml(data.text) || plainText(JSON.stringify(data)),
            }}
          ></p>
        )
      })}
    </div>
  )
}
