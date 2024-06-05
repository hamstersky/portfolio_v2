import { z, defineCollection, reference } from 'astro:content';

const projectExcerpts = defineCollection({
  type: 'content',
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    excerpt: reference('projectExcerpts'),
    client: z.string().optional(),
    scope: z.array(z.string()).optional(),
    tech: z.array(z.string()),
    result: z.array(z.string()).optional(),
    gallery: z.array(z.string()),
    github: z.string().optional(),
    url: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projectExcerpts,
  projects,
};
