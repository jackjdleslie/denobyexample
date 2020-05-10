const fs = require("fs");

module.exports = {
  env: {
    examples: fs.readdirSync(`${__dirname}/pages/examples`)
  }
};
