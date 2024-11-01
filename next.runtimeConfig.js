const serverRuntimeConfig = {}

const publicRuntimeConfig = {
  GROUP_NAME: process.env.GROUP_NAME,
  NODE_ENV: process.env.NODE_ENV, // Used in assets/js/env.js
}

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,
}
