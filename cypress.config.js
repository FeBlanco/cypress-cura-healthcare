const { defineConfig } = require("cypress");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);
      return config;
      // implement node event listeners here
    },
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      browserPermissions: {
        notifications: "allow",
      },
    },
  },
});
