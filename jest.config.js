const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "@happy-dom/jest-environment",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

module.exports = createJestConfig(customJestConfig);
