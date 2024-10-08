import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";
import * as os from "node:os";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
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