import type { Metadata, Viewport } from "next"
import { createOnimiseaMetadata, onimiseaViewport } from "@workspace/brand/next/metadata"
import { onimiseaFontClassName as fontClassName } from "@workspace/brand/next/fonts"
import { ContactModalProvider } from "@/components/visitor/contact-modal-provider"

import "@workspace/ui/globals.css"

export const metadata: Metadata = createOnimiseaMetadata()

export const viewport: Viewport = onimiseaViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        {children}
        <ContactModalProvider />
      </body>
    </html>
  )
}
