import type { ApiEnvelope } from "./contracts.js"

export class BffRequestError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details: Record<string, unknown> = {}
  ) {
    super(message)
  }
}

let csrfToken: string | undefined

async function getCsrfToken(): Promise<string> {
  if (csrfToken) return csrfToken
  const response = await fetch(`${process.env.NEXT_PUBLIC_BFF_URL ?? ""}/api/csrf`, {
    credentials: "include",
  })
  const body = (await response.json()) as { data?: { csrfToken?: string } }
  if (!response.ok || !body.data?.csrfToken)
    throw new BffRequestError(503, "csrf_unavailable", "Security token is unavailable.")
  csrfToken = body.data.csrfToken
  return csrfToken
}

export async function bffFetch<T>(
  path: string,
  init?: RequestInit
): Promise<ApiEnvelope<T>> {
  const method = (init?.method ?? "GET").toUpperCase()
  const headers = new Headers(init?.headers)
  headers.set("Accept", "application/json")
  if (!["GET", "HEAD", "OPTIONS"].includes(method) && path !== "/contact/inquiry") {
    headers.set("X-CSRF-Token", await getCsrfToken())
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_BFF_URL ?? ""}/api/v1${path}`, {
    ...init,
    credentials: "include",
    headers,
  })
  const body = (await response.json()) as ApiEnvelope<T> & {
    error?: { code: string; message: string; details?: Record<string, unknown> }
  }
  if (!response.ok || body.error) {
    throw new BffRequestError(
      response.status,
      body.error?.code ?? "request_failed",
      body.error?.message ?? "Request failed.",
      typeof body.error?.details === "object" && body.error.details
        ? body.error.details
        : {}
    )
  }
  return body
}
