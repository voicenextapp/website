import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkExternalLinks from "remark-external-links";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: "tailwind.config.ts",
    }),
    react(),
    mdx({
      remarkPlugins: [
        [
          remarkExternalLinks,
          {
            target: "_blank",
          },
        ],
      ],
    }),
  ],
  output: "server",
  adapter: netlify(),
});
