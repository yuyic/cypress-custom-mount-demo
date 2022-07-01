const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:3006/api",
  },
  e2e: {},
});
