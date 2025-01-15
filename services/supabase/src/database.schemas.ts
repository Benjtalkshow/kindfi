// Generated by ts-to-zod
import { z } from 'zod'
import type { Json } from './database.types'

export const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
	z
		.union([
			z.string(),
			z.number(),
			z.boolean(),
			z.record(z.union([jsonSchema, z.undefined()])),
			z.array(jsonSchema),
		])
		.nullable(),
)
