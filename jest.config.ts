import type { JestConfigWithTsJest } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.m?[tj]sx?$': ['ts-jest', { useESM: true }],
  },
};

export default jestConfig;
