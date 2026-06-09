import type { MetadataRoute } from "next"
import { createOnimiseaManifest } from "@workspace/brand/next/metadata"

export default function manifest(): MetadataRoute.Manifest {
  return createOnimiseaManifest()
}
