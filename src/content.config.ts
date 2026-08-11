import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	// Load Markdown files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
		// Public repo link — shown on the card and detail page when present.
		repoUrl: z.string().url().optional(),
		// Live/demo link — takes priority over repoUrl for the card's click target.
		liveUrl: z.string().url().optional(),
		// Lower numbers show first.
		order: z.number().default(0),
	}),
});

const blog = defineCollection({
	// Load Markdown files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { projects, blog };
