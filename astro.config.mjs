import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import analytics from '@astrolib/analytics';
import partytown from '@astrojs/partytown';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [react(),
  tailwind(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),]
});