import * as z from "zod";

export const schemaContact = z.object({
  firstName: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 Caracteres" }),
  meses: z.any(),
  number: z.string(),
  seletor: z.string(),
});
