import { describe, expect, it } from "vitest"

import { blogFilterHref, normalizeSelectedTags, paginationRange } from "./blog-query"

describe("blog query helpers", () => {
  it("normalizes repeated and comma-separated tag query values", () => {
    expect(normalizeSelectedTags(["django,ai", "systems", "ai"])).toEqual([
      "django",
      "ai",
      "systems",
    ])
  })

  it("builds filter hrefs with multi-tag state and resets page", () => {
    expect(
      blogFilterHref({
        search: "security",
        tags: ["django", "ai"],
        period: "6m",
        project: "accessivo",
        page: 5,
      })
    ).toBe("/blog?search=security&tag=django&tag=ai&period=6m&project=accessivo")
  })

  it("creates a bounded numbered pagination range", () => {
    expect(paginationRange({ currentPage: 6, totalPages: 12 })).toEqual([4, 5, 6, 7, 8])
    expect(paginationRange({ currentPage: 1, totalPages: 3 })).toEqual([1, 2, 3])
  })
})
