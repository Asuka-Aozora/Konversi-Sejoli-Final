// generate-config.js
const fs = require("fs");
require("dotenv").config(); // Load .env

const configContent = `
// AUTO-GENERATED FILE
window.APP_CONFIG = {
  BASE_URL: "${process.env.BASE_URL}"
};
`;

fs.writeFileSync("public/config.js", configContent);
console.log("✅ config.js berhasil digenerate!");
