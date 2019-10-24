const withCSS = require("@zeit/next-css");
const glob = require("glob");

module.exports = withCSS({
  publicRuntimeConfig: {
    examples: glob("pages/*.js", { cwd: __dirname }, result => result)
  }
});
