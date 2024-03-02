import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
// import expressiveCode from "astro-expressive-code";
// import metaTags from "astro-meta-tags";
import vercel from "@astrojs/vercel/static";

//  NOTE: SMARTYPANTS: PRETTIFICATION OF PUNCTUATION. INTEGRATED INTO MD/MDX BY DEFAULT. [ADDITIONAL DEPENDENCY AVAILABLE]

export default defineConfig({
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	markdown: {
		remarkPlugins: [
			//  NOTE: TABLE OF CONTENTS BUILDER
			remarkToc,
		],
		rehypePlugins: [
			//  NOTE: ASSIGNS ID'S TO HEADINGS BASED ON HEADING CONTENT [NORMALIZED - REMOVES SPECIAL CHARS, PUNCTUATION, ETC.]
			rehypeHeadingIds,
			[
				//  NOTE: GENERATES THE AUTO LINKS NEXT TO HEADINGS [REQUIRES rehypePlugins]
				rehypeAutolinkHeadings,
				{
					behavior: "append",
					content: fromHtmlIsomorphic(
						'<span class="ri-link-m ri-sm anchor-link" style="margin-left: 0.4rem;"></span>'
					),
				},
			],
		],
	},
	integrations: [
		tailwind(),
 		// expressiveCode(astroExpressiveCodeOptions),
		mdx(),
		// metaTags(),
	],
});
