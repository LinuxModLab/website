import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const research = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/research",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(["active", "investigating", "resolved", "archived"]),
    project: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { research };