import type { Metadata, MetadataRoute, Viewport } from "next"

export const onimiseaSite = {
  name: "Onimisea",
  legalName: "Onimisea",
  personName: "Ahmed Tijani",
  url: "https://onimisea.com",
  locale: "en_US",
  language: "en",
  email: "onimisea@gmail.com",
  telephone: "+2348034023726",
  tagline: "Engineering secure, scalable AI-native systems.",
  title: "Onimisea - Ahmed Tijani",
  description:
    "Ahmed Tijani is a full-stack software engineer, AI-native builder, and founder behind Onimisea, engineering secure, scalable, accessible, high-performance software systems from idea to production.",
  shortDescription:
    "Ahmed Tijani engineers secure, scalable AI-native systems from idea to production.",
  profile:
    "Full-stack software engineer, AI-native builder, product-minded systems architect, and founder behind the Onimisea personal brand.",
  githubUrl: "https://github.com/Onimisea",
  keywords: [
    "Onimisea",
    "Ahmed Tijani",
    "AI-native systems",
    "Full-stack software engineer",
    "Next.js engineer",
    "Django engineer",
    "Python backend engineer",
    "React frontend engineer",
    "Software systems architect",
    "Secure scalable software",
    "RAG pipelines",
    "Product engineering",
    "Remote software engineer",
  ],
} as const

export const onimiseaMetadataBase = new URL(onimiseaSite.url)

export const onimiseaViewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0B0806",
  width: "device-width",
  initialScale: 1,
}

export function createOnimiseaMetadata(overrides: Metadata = {}): Metadata {
  const title = overrides.title ?? {
    default: onimiseaSite.title,
    template: `%s | ${onimiseaSite.name}`,
  }
  const description = overrides.description ?? onimiseaSite.description

  return {
    metadataBase: onimiseaMetadataBase,
    title,
    description,
    applicationName: onimiseaSite.name,
    generator: "Next.js",
    referrer: "strict-origin-when-cross-origin",
    creator: onimiseaSite.personName,
    publisher: onimiseaSite.name,
    authors: [{ name: onimiseaSite.personName, url: onimiseaSite.url }],
    category: "technology",
    keywords: [...onimiseaSite.keywords],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: onimiseaSite.title,
      description,
      url: onimiseaSite.url,
      siteName: onimiseaSite.name,
      locale: onimiseaSite.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Onimisea - Ahmed Tijani, engineering secure, scalable AI-native systems.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: onimiseaSite.title,
      description,
      images: [
        {
          url: "/twitter-image.png",
          alt: "Onimisea - Ahmed Tijani, engineering secure, scalable AI-native systems.",
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    ...overrides,
  }
}

export function createOnimiseaManifest(): MetadataRoute.Manifest {
  return {
    name: "Onimisea - Ahmed Tijani",
    short_name: "Onimisea",
    description: onimiseaSite.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B0806",
    theme_color: "#0B0806",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

export function createOnimiseaStructuredData() {
  const personId = `${onimiseaSite.url}/#person`
  const websiteId = `${onimiseaSite.url}/#website`
  const serviceId = `${onimiseaSite.url}/#professional-service`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: onimiseaSite.personName,
        alternateName: "Onimisea",
        url: onimiseaSite.url,
        email: onimiseaSite.email,
        telephone: onimiseaSite.telephone,
        jobTitle: [
          "Full-Stack Software Engineer",
          "AI-Native Builder",
          "Software Systems Architect",
          "Product-minded Technical Leader",
        ],
        description: onimiseaSite.description,
        sameAs: [onimiseaSite.githubUrl],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Python",
          "Django",
          "Django REST Framework",
          "PostgreSQL",
          "Redis",
          "RAG pipelines",
          "AI-native product engineering",
          "Secure API architecture",
          "Accessible frontend systems",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: onimiseaSite.name,
        url: onimiseaSite.url,
        description: onimiseaSite.description,
        inLanguage: "en",
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: "Onimisea Engineering Services",
        url: onimiseaSite.url,
        description:
          "Secure, scalable full-stack software engineering, AI-native product architecture, backend APIs, frontend systems, and technical leadership for remote teams, founders, and businesses.",
        areaServed: "Worldwide",
        email: onimiseaSite.email,
        telephone: onimiseaSite.telephone,
        founder: {
          "@id": personId,
        },
        sameAs: [onimiseaSite.githubUrl],
        serviceType: [
          "Full-stack software engineering",
          "AI-native systems architecture",
          "Backend API engineering",
          "Frontend engineering",
          "Security hardening",
          "Technical leadership",
        ],
      },
    ],
  } as const
}
