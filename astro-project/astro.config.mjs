import { defineConfig } from 'astro/config';
import lit from '@semantic-ui/astro-lit';

export default defineConfig({
  integrations: [lit()],
});