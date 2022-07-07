module.exports = {
    transform: {
        '^.+\\.ts$':'ts-jest'
    },
    moduleFileExtensions: [
        'js',
        'ts'
    ],
    testMatch: [
        '**/telemetry-system-tests/**/*.test.(ts|js)'
      ],
    testEnvironment: 'node'
}