import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://hunsalz.de",
    integrations: [sitemap()],
});
