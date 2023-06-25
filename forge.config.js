const { parsed } = require("dotenv").config();
module.exports = {
  packagerConfig: {
    name: "PoeGPT",
    executableName: "PoeGPT",
    icon: "images/icon",
    appBundleId: "com.felarof.poegpt",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
      identity: "Developer ID Application: Nikhil Venkat Sonti (8YMKWU47S5)",
    },
    osxNotarize: {
      appBundleId: "com.felarof.poegpt",

      tool: "notarytool",
      appleId: parsed.APPLE_ID,
      appleIdPassword: parsed.APPLE_PASSWORD,
      teamId: parsed.APPLE_TEAM_ID,
    },
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "felarof99",
          name: "PoeGPT",
        },
        prerelease: true,
      },
    },
  ],

  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["win32"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      platforms: ["linux"],
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      platforms: ["linux"],
      config: {},
    },
  ],
};