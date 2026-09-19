import type { NextConfig } from "next"

const isDevelopment = process.env.NODE_ENV === "development"
const bffOrigin = process.env.NEXT_PUBLIC_BFF_URL ?? ""
const mediaOrigin = process.env.NEXT_PUBLIC_MEDIA_ORIGIN ?? "https://media.onimisea.com"

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: blob: ${mediaOrigin}`,
      "font-src 'self'",
      `connect-src 'self'${bffOrigin ? ` ${bffOrigin}` : ""}`,
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
]

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/brand", "@workspace/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(mediaOrigin).hostname,
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
