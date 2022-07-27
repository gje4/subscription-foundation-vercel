/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  //TODO update appCallbackUrl
  publicRuntimeConfig: {
    environment: process.env.ENV_NAME,
    bigcommerce: {
      appClientId: process.env.BC_APP_CLIENT_ID,
      appSecret: process.env.BC_APP_SECRET,
      appCallbackUrl: process.env.BC_APP_CALLBACK_URL
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/scss/common.module.scss")]
  }
};
