export type CodeToken = {
  value: string
  kind: "keyword" | "literal" | "string" | "comment" | "plain"
}

const KEYWORDS = new Set([
  "async",
  "await",
  "class",
  "const",
  "def",
  "export",
  "from",
  "function",
  "if",
  "import",
  "let",
  "return",
  "type",
])
const LITERALS = new Set(["false", "null", "none", "true", "undefined"])

function asText(value: unknown) {
  return typeof value === "string" ? value : ""
}

export function normalizeTableRows(data: Record<string, unknown>): string[][] {
  const rows = Array.isArray(data.content) ? data.content : data.rows
  if (!Array.isArray(rows)) return []
  return rows
    .map((row) => (Array.isArray(row) ? row.map((cell) => asText(cell).trim()) : []))
    .filter((row) => row.some(Boolean))
}

export function normalizeChecklistItems(
  data: Record<string, unknown>
): Array<{ text: string; checked: boolean }> {
  const items = Array.isArray(data.items) ? data.items : []
  return items
    .map((item) => {
      if (typeof item === "string") return { text: item.trim(), checked: false }
      if (!item || typeof item !== "object") return { text: "", checked: false }
      const record = item as Record<string, unknown>
      return {
        text: asText(record.text).trim(),
        checked: Boolean(record.checked),
      }
    })
    .filter((item) => item.text)
}

export function highlightCodeTokens(code: string, language: string): CodeToken[] {
  if (!language || language === "text") return [{ value: code, kind: "plain" }]
  const tokens =
    code.match(/\/\/.*|#.*|(["'`])(?:\\.|(?!\1).)*\1|\w+|\s+|[^\w\s]+/g) ?? []
  return tokens.map((value) => {
    const lower = value.toLowerCase()
    if (value.startsWith("//") || value.startsWith("#")) return { value, kind: "comment" }
    if (/^["'`]/.test(value)) return { value, kind: "string" }
    if (KEYWORDS.has(lower)) return { value, kind: "keyword" }
    if (LITERALS.has(lower) || /^\d+(\.\d+)?$/.test(value))
      return { value, kind: "literal" }
    return { value, kind: "plain" }
  })
}
