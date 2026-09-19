import { StructuredData } from "@/components/marketing/structured-data/structured-data"
import { MarketingHome } from "@/components/marketing/marketing-home"

export const revalidate = 300

export default function Page() {
  return (
    <>
      <StructuredData />
      <MarketingHome />
    </>
  )
}
