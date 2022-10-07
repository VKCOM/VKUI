const base = require("../jest.unit.config");
const path = require("path");
const chalk = require("chalk");
const { canRunTests, useDocker } = require("./detectEnv");

const devicesMap = {
  android: ["Pixel 5"],
  ios: ["iPhone 12"],
  vkcom: undefined,
};

const jestPlaywrightOptions = Object.assign(
  {
    browsers: [process.env.BROWSER ?? "chromium"],
    devices: devicesMap[process.env.PLATFORM ?? "vkcom"],
    collectCoverage: true,
    contextOptions: {
      viewport: {
        width: 800,
        height: 600,
      },
    },
  },
  useDocker
    ? {
        connectOptions: {
          wsEndpoint: "ws://localhost:9001/playwright",
        },
      }
    : {}
);
const config = {
  ...base,
  displayName: "e2e",
  testMatch: ["**/*.e2e.{ts,tsx}"],
  preset: "jest-playwright-preset",
  collectCoverage: false,
  setupFilesAfterEnv: [path.join(__dirname, "jest/matchers.ts")],
  globalSetup: path.join(__dirname, "jest/globalSetup.ts"),
  globalTeardown: path.join(__dirname, "jest/globalTeardown.ts"),
  testEnvironmentOptions: {
    ...(base.testEnvironmentOptions || {}),
    "jest-playwright": jestPlaywrightOptions,
  },
  moduleNameMapper: {
    "@react-playwright": path.join(__dirname, "index.ts"),
    "\\.css$": require.resolve("identity-obj-proxy"),
  },
};

if (!canRunTests) {
  console.error(
    chalk.red.bold(
      "Screenshots will only match in linux or docker - please install and start docker."
    )
  );
}

module.exports = config;
