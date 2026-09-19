import { describe, expect, it } from "vitest"

import { nextFocusTrapIndex } from "./focus-trap"

describe("nextFocusTrapIndex", () => {
  it("wraps tab focus within the modal boundary", () => {
    expect(nextFocusTrapIndex({ currentIndex: 0, count: 3, shiftKey: true })).toBe(2)
    expect(nextFocusTrapIndex({ currentIndex: 2, count: 3, shiftKey: false })).toBe(0)
    expect(nextFocusTrapIndex({ currentIndex: 1, count: 3, shiftKey: false })).toBe(2)
  })
})
