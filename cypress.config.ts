import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "z4pneh",
  e2e: {
    baseUrl: "https://r0961282-realbeans.myshopify.com",
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
    // Only include RealBeans spec
    specPattern: "cypress/e2e/realbeans.cy.ts", // Only run this file
    // If needed later, re-enable others:
    // "cypress/e2e/home.cy.ts",
    // "cypress/e2e/subscribe.cy.ts",
    // "cypress/e2e/user-journey.cy.ts"
  },
});
