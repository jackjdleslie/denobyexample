const withCSS = require("@zeit/next-css");
const fs = require("fs");

module.exports = withCSS({
  cssModules: true,
  publicRuntimeConfig: {
    examples: fs.readdirSync(`${__dirname}/pages/examples`)
  }
});
