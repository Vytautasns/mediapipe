module.exports = {
    transformIgnorePatterns: ['node_modules'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.js?$': 'ts-jest',
    },
    moduleNameMapper: {
        '~(.*)$': '<rootDir>/src$1'
    },
    verbose: false,
    globals: {
        NODE_ENV: 'test'
    },
    coveragePathIgnorePatterns: ['node_modules/', 'config/'],
    moduleFileExtensions: ['js', 'json', 'ts'],
    testPathIgnorePatterns: ['node_modules'],
    rootDir: '../',
};
