import { z } from 'zod';

export const CreateFormDtoSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(250).optional().default(''),
});

export type CreateFormDto = z.infer<typeof CreateFormDtoSchema>;
