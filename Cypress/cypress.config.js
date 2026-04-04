require('dotenv').config()
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      LOGIN_PAGE: process.env.LOGIN_PAGE,
      SAUCE_USERNAME: process.env.SAUCE_USERNAME,
      SAUCE_PASSWORD: process.env.SAUCE_PASSWORD,
    }
  },
});