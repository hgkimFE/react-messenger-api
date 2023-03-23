import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist/*"],
  testMatch: ["**/*.test.ts", "**/__tests__/*.test.ts"]
};

export default config;
