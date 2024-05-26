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
  }),
});

export const collections = {
  projectExcerpts,
  projects,
};
