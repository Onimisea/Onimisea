const CONTACT_FIELDS = new Set([
  "full_name",
  "email",
  "what_building",
  "what_need",
  "stack",
  "timeline",
  "source",
])

function firstMessage(value: unknown): string {
  if (typeof value === "string") return value
  if (Array.isArray(value)) return firstMessage(value[0])
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>
    return firstMessage(record.message ?? record.detail ?? Object.values(record)[0])
  }
  return ""
}

export function mapContactFieldErrors(details: unknown): {
  fields: Record<string, string>
  form: string
} {
  const fields: Record<string, string> = {}
  let form = ""
  if (!details || typeof details !== "object") return { fields, form }
  for (const [key, value] of Object.entries(details as Record<string, unknown>)) {
    const message = firstMessage(value)
    if (!message) continue
    if (CONTACT_FIELDS.has(key)) fields[key] = message
    else if (!form) form = message
  }
  return { fields, form }
}
