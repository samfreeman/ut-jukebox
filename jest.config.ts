
export default {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts'],
	coverageDirectory: "tools/coverage",
	coverageProvider: "v8",
	preset: 'ts-jest',
	roots: ['src', 'tests'],
	testEnvironment: 'jest-environment-node',
	testMatch: ['**/tests/**/*.test.ts'],
	verbose: true
}
