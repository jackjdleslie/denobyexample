const withCSS = require("@zeit/next-css");
const examples = require("./examples.json");

module.exports = withCSS({
  cssModules: true,
  serverRuntimeConfig: {
    examples
  }
});
