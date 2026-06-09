import { createOnimiseaStructuredData } from "@workspace/brand/next/metadata"

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createOnimiseaStructuredData()).replace(/</g, "\\u003c"),
      }}
    />
  )
}
