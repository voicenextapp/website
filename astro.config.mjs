import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkExternalLinks from "remark-external-links";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: "tailwind.config.ts",
    }),
    react(),
  ],
  output: "server",
  adapter: netlify(),
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
