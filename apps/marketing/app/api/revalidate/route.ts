import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  if (
    !process.env.REVALIDATE_SECRET ||
    request.headers.get("x-revalidate-secret") !== process.env.REVALIDATE_SECRET
  ) {
    return NextResponse.json(
      { error: { code: "revalidation_forbidden", message: "Forbidden.", details: {} } },
      { status: 403 }
    )
  }
  const body = (await request.json()) as { type?: string; slug?: string }
  if (!body.slug || !["post", "case-study"].includes(body.type ?? "")) {
    return NextResponse.json(
      {
        error: {
          code: "revalidation_invalid",
          message: "Invalid revalidation request.",
          details: {},
        },
      },
      { status: 400 }
    )
  }
  const path = body.type === "post" ? `/blog/${body.slug}` : `/work/${body.slug}`
  revalidatePath(path)
  revalidatePath("/")
  revalidatePath(body.type === "post" ? "/blog" : "/work")
  return NextResponse.json({ data: { revalidated: true } })
}
