import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://huxiuhan.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
  integrations: [mdx()],
});
