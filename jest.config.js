export default {
    // Enable ES module support
    transform: {},
    // Test environment
    testEnvironment: 'node',
    // Test file patterns
    testMatch: ['**/tests/**/*.test.js'],
    // Coverage reporting
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    // Other options
    verbose: true
};