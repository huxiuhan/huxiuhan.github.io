import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    comments: z.boolean().optional(),
    categories: z.any().optional(),
  }),
});

export const collections = { blog };
