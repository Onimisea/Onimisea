import { z } from "zod"

export const apiErrorSchema = z.object({
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.record(z.string(), z.unknown()),
  }),
})

export const contactInquirySchema = z.object({
  full_name: z.string().trim().min(1).max(150),
  email: z.email(),
  what_building: z.string().trim().min(10).max(2000),
  what_need: z.string().trim().min(10).max(2000),
  stack: z.string().trim().max(200).optional(),
  timeline: z.string().trim().optional(),
  source: z.string().trim().optional(),
  website: z.string().max(200).optional(),
})

export const loginSchema = z.object({ email: z.email(), password: z.string().min(1) })

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>
export type LoginInput = z.infer<typeof loginSchema>

export type ApiEnvelope<T> = { data: T; meta?: Record<string, unknown> }
export type ApiError = z.infer<typeof apiErrorSchema>

export function success<T>(data: T, meta?: Record<string, unknown>): ApiEnvelope<T> {
  return meta ? { data, meta } : { data }
}
