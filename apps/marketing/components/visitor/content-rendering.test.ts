import { describe, expect, it } from "vitest"

import {
  highlightCodeTokens,
  normalizeChecklistItems,
  normalizeTableRows,
} from "./content-rendering"

describe("content rendering helpers", () => {
  it("normalizes richer Editor.js table and checklist variants", () => {
    expect(
      normalizeTableRows({
        content: [
          ["Metric", "Value"],
          ["Coverage", "95%"],
        ],
      })
    ).toEqual([
      ["Metric", "Value"],
      ["Coverage", "95%"],
    ])
    expect(
      normalizeChecklistItems({
        items: [
          { text: "Signed BFF request", checked: true },
          { text: "Direct backend denied", checked: false },
        ],
      })
    ).toEqual([
      { text: "Signed BFF request", checked: true },
      { text: "Direct backend denied", checked: false },
    ])
  })

  it("adds language-aware syntax token metadata to code blocks", () => {
    expect(highlightCodeTokens("const enabled = true", "typescript")).toEqual([
      { value: "const", kind: "keyword" },
      { value: " ", kind: "plain" },
      { value: "enabled", kind: "plain" },
      { value: " ", kind: "plain" },
      { value: "=", kind: "plain" },
      { value: " ", kind: "plain" },
      { value: "true", kind: "literal" },
    ])
  })
})
