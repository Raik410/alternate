import { z, type TypeOf } from 'zod'
import { validationMessage } from '@/shared'

export const registerSchema = z
  .object({
    email: z.string().email({ message: validationMessage.EMAIL }),
    password: z.string().min(3, { message: validationMessage.MIN_REQUIRED(3) }),
    'verify-password': z.string().min(3, { message: validationMessage.MIN_REQUIRED(3) }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data['verify-password']) {
      ctx.addIssue({
        message: 'Пароли должны совпадать',
        code: 'custom',
        path: ['password', 'verify-password'],
      })
    }
  })

export type LoginSchema = TypeOf<typeof registerSchema>
