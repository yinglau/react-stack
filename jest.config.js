module.exports = {
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}',
  //   '!src/**/*.test.{js,jsx}',
  // ],
  setupFiles: ['<rootDir>/internals/testing/enzyme-setup.js'],
  // setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    ".*\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
