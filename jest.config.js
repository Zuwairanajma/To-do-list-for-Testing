module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    coverageReporters: ['json', 'html'],
    collectCoverageFrom: ['src/**/*.js'],
  };
  // jest.config.js
module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  };
  module.exports = {
    testEnvironment: 'jsdom',
  };
  