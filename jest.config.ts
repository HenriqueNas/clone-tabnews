import type { Config } from 'jest';
import nextJest from 'next/jest.js';

import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@v1/(.*)$': '<rootDir>/pages/api/v1/$1',
    '^@infra/(.*)$': '<rootDir>/infra/$1',
  },
};

export default createJestConfig(config);
