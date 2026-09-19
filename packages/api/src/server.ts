const encoder = new TextEncoder()

function asArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer
}

type SignInput = {
  secret: string
  method: string
  path: string
  body: string | Uint8Array
  timestamp: string
  nonce: string
}

export async function createBffSignature(input: SignInput): Promise<string> {
  const body = typeof input.body === "string" ? encoder.encode(input.body) : input.body
  const digest = await crypto.subtle.digest("SHA-256", asArrayBuffer(body))
  const bodyDigest = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("")
  const canonical = [
    input.method.toUpperCase(),
    input.path,
    input.timestamp,
    input.nonce,
    bodyDigest,
  ].join("\n")
  const key = await crypto.subtle.importKey(
    "raw",
    asArrayBuffer(encoder.encode(input.secret)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    asArrayBuffer(encoder.encode(canonical))
  )
  return Array.from(new Uint8Array(signature), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("")
}

export type UpstreamResult = {
  status: number
  body: unknown
  setCookies: string[]
}

export async function requestDjango(input: {
  method: string
  path: string
  body?: Uint8Array
  contentType?: string | null
  cookie?: string | null
}): Promise<UpstreamResult> {
  return requestDjangoOnce(input)
}

async function requestDjangoOnce(input: {
  method: string
  path: string
  body?: Uint8Array
  contentType?: string | null
  cookie?: string | null
}): Promise<UpstreamResult> {
  const baseUrl = process.env.BACKEND_BASE_URL
  const secret = process.env.BFF_ATTESTATION_SECRET
  if (!baseUrl || !secret) {
    throw new Error("BFF upstream environment is incomplete.")
  }
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const nonce = crypto.randomUUID()
  const body = input.body ?? new Uint8Array()
  const signature = await createBffSignature({
    secret,
    method: input.method,
    path: input.path,
    body,
    timestamp,
    nonce,
  })
  const headers = new Headers({
    Accept: "application/json",
    "X-Onimisea-Bff-Timestamp": timestamp,
    "X-Onimisea-Bff-Nonce": nonce,
    "X-Onimisea-Bff-Signature": signature,
  })
  if (input.contentType) headers.set("Content-Type", input.contentType)
  if (input.cookie) headers.set("Cookie", input.cookie)
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}${input.path}`, {
    method: input.method,
    headers,
    body: body.byteLength > 0 ? asArrayBuffer(body) : undefined,
    cache: "no-store",
  })
  const text = await response.text()
  let parsed: unknown = null
  if (text) {
    try {
      parsed = JSON.parse(text) as unknown
    } catch {
      parsed = { detail: "Upstream returned an invalid response." }
    }
  }
  const cookieHeaders = response.headers as Headers & { getSetCookie?: () => string[] }
  return {
    status: response.status,
    body: parsed,
    setCookies: cookieHeaders.getSetCookie?.() ?? [],
  }
}

export async function refreshDjangoSession(cookie: string): Promise<UpstreamResult> {
  return requestDjangoOnce({ method: "POST", path: "/api/v1/auth/refresh/", cookie })
}
