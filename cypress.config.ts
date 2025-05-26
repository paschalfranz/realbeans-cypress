import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "z4pneh",
  e2e: {
    baseUrl: "https://r0961282-realbeans.myshopify.com",
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
  },
});
