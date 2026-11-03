
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hunsalz.de',
  integrations: [
    unocss({
      injectEntry: false,
      injectReset: false,
    }),
    icon(),
    sitemap(),
  ],
});
