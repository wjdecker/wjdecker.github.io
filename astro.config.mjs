import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
    integrations: [sitemap(), mermaid({
      theme: 'forest',
      autoTheme: true
    }), mdx()],
  markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // Katex plugin options
                    output: 'mathml'
                }
            ]
        ],
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
// stylesheets: [
//    {
//      href: 'src/styles/katex.min.css',
//      type: 'text/css',
//    },
//  ],
});

// @ts-check
// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// export default defineConfig({
//  site: 'https://dennisklappe.github.io',
  // Only use base path in production (GitHub Pages)
//  base: process.env.NODE_ENV === 'production' ? '/index' : '/',
//  integrations: [sitemap()],
//  markdown: {
//    shikiConfig: {
 //     theme: 'css-variables',
 //     langs: [],
 //     wrap: true,
 //   },
//  },
// });
