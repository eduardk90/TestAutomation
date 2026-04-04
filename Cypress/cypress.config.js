require('dotenv').config()
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.LOGIN_PAGE = process.env.LOGIN_PAGE
      config.env.SAUCE_USERNAME = process.env.SAUCE_USERNAME
      config.env.SAUCE_PASSWORD = process.env.SAUCE_PASSWORD
      return config
    },
  },
  allowCypressEnv: true,
});