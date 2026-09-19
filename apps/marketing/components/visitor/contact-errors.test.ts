import { describe, expect, it } from "vitest"

import { mapContactFieldErrors } from "./contact-errors"

describe("mapContactFieldErrors", () => {
  it("maps backend validation details into contact field messages", () => {
    const errors = mapContactFieldErrors({
      full_name: ["This field is required."],
      email: "Enter a valid email address.",
      what_need: [{ message: "Use at least 10 characters." }],
      non_field_errors: ["Request could not be completed."],
    })

    expect(errors.fields).toEqual({
      full_name: "This field is required.",
      email: "Enter a valid email address.",
      what_need: "Use at least 10 characters.",
    })
    expect(errors.form).toBe("Request could not be completed.")
  })
})
