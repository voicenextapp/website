import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkExternalLinks from "remark-external-links";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: "tailwind.config.ts",
    }),
    react(),
  ],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
  markdown: {
    remarkPlugins: [
      [
        remarkExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
});
