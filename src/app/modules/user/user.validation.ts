import { z } from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'password is required',
    })
    .max(20, { message: 'password can not excede 20 characters ' })
    .optional(),
});
