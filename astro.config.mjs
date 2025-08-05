// export default defineConfig({
//   integrations: [tailwind()],
//   site: "https://ibrokethecode.github.io",
//   base: "/portfolio"
//   base: import.meta.env.PROD ? "/portfolio" : "/",
// });

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://ibrokethecode.github.io/portfolio/",
  base: "/portfolio/",
});
