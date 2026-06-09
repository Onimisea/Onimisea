import { StructuredData } from "@/components/marketing/structured-data/structured-data"
import { MarketingHome } from "@/components/marketing/marketing-home"

export const dynamic = "force-static"

export default function Page() {
  return (
    <>
      <StructuredData />
      <MarketingHome />
    </>
  )
}
