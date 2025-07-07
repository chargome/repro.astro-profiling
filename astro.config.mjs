// @ts-check
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [sentry()],

  adapter: node({
    mode: 'standalone'
  })
});