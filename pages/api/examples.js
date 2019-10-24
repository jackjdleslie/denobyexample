import getConfig from "next/config";
const {
  serverRuntimeConfig: { examples }
} = getConfig();

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(examples));
};
