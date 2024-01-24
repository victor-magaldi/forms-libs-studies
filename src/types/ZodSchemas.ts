import * as z from "zod";

export const schemaContact = z.object({
  firstName: z.string().max(5),
  meses: z.any(),
  number: z.string(),
  seletor: z.string(),
});
