const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.symboltm.com', // Replace with your site's base URL
    supportFile: 'cypress/support/e2e.js', // Default support file
    specPattern: 'cypress/e2e/**/*.cy.js', // Test file pattern
    viewportWidth: 1280, // Default viewport width
    viewportHeight: 720, // Default viewport height
    video: true, // Record videos for test runs
    retries: {
      runMode: 2, // Retry failed tests in CLI mode
      openMode: 0, // No retries in interactive mode
    },
  },
});
