/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = async () => {
  return {
    verbose: true,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
    displayName: {
      name: 'SERVER',
      color: 'green',
    },
    errorOnDeprecated: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
};
