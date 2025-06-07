import { z, type TypeOf } from 'zod'
import { validationMessage } from '@/shared'

export const loginSchema = z.object({
  email: z.string().email({ message: validationMessage.EMAIL }),
  password: z.string().min(3, { message: validationMessage.MIN_REQUIRED(3) }),
})

export type LoginSchema = TypeOf<typeof loginSchema>
