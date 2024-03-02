import {z, defineCollection} from 'astro:content';

export interface BlogFrontmatter {
	layout: string;
	title: string;
	description: string;
	genre: string;
	tags: string[];
	image: string;
	publishedAt: string;
}

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		layout: z.string().default('../../layouts/LayoutBlog.astro'),
		title: z.string(),
		description: z.string(),
		genre: z.string(),
		tags: z.array(z.string()),
		image: z.string(),
		publishedAt: z.string()
	}),
});

export const collections = {
	'blog': blogCollection,
}
