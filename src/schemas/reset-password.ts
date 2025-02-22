import { z } from 'zod';

export const resetpasswordScheme = z.object({
  newPassWord: z
    .string()
    .min(6, 'Introduza uma palavra-passe de no mínimo 6 dígitos!'),
});

export type ResetPasswordData = z.infer<typeof resetpasswordScheme>;
