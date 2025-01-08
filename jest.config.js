module.exports = {
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest", // Transpile .js, .jsx, .ts, and .tsx files
      },
    moduleNameMapper: {
      "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    },
    testEnvironment: "jsdom", // Ensures DOM-related code works in tests
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Optional: Path to test setup file
  };