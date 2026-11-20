import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    lang: z.enum(['es', 'en']).default('es'),
    category: z.string().default('General'),
    cover: z.string().optional().nullable(),
    translationKey: z.string().optional().nullable(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    business: z.string().default(''),
    city: z.string().default(''),
    photo: z.string().optional().nullable(),
    quote_es: z.string(),
    quote_en: z.string().optional().nullable(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    name: z.string(),
    role: z.string(),
    photo: z.string().optional().nullable(),
    heroPhoto: z.string().optional().nullable(),
    intro: z.string(),
    gallery: z.array(z.object({ image: z.string(), caption: z.string() })).default([]),
    highlights: z.array(z.object({ label: z.string(), title: z.string(), text: z.string() })).default([]),
    education: z.array(z.string()).default([]),
    recognitions: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, testimonials, about };
