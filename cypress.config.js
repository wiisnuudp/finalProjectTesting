const { defineConfig } = require("cypress");
const preprosessor = require('@badeball/cypress-cucumber-preprocessor');
const browserivy = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config){
  await preprosessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserivy.default(config));

  return config;
}

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  e2e: {
    // specPattern: "**/*.feature",
    supportFile: false,
    testIsolation: false,
    setupNodeEvents,
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalOriginDependencies: true,
  },
});
