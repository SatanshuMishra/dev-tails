import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		genre: z.string(),
		tags: z.array(z.string()),
		image: z.string(),
	}),
});

export const collections = {
	'blog': blogCollection,
}
