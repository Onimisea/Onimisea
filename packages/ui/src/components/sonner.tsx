"use client"

import type * as React from "react"
import { CheckCircle2, Info, Loader2, TriangleAlert, XCircle } from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      richColors
      closeButton
      icons={{
        success: <CheckCircle2 className="size-4" />,
        info: <Info className="size-4" />,
        warning: <TriangleAlert className="size-4" />,
        error: <XCircle className="size-4" />,
        loading: <Loader2 className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--onimisea-radius-button)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "border-border bg-card text-card-foreground shadow-2xl",
          title: "font-medium",
          description: "text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground hover:bg-onimisea-signal-strong",
          cancelButton: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          closeButton:
            "border-border bg-card text-muted-foreground hover:text-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
