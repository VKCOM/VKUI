import { createTestUtils } from '@morev/stylelint-testing-library';
import { assert, describe, expect, it } from 'vitest';
import plugins from './index.js';

const { createTestRule } = createTestUtils({
  testFunctions: { assert, describe, expect, it },
  plugins,
});

globalThis.createTestRule = createTestRule;
