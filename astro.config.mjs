import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://the-dope-pendragon-campaign.github.io',
  integrations: [mdx(), tailwind()]
});
