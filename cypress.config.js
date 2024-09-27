import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },

    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "http://example.com",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {

    },
  },
});