import { getTestRule, getTestRuleConfigs } from 'jest-preset-stylelint';
import plugins from './index.js';

globalThis.testRule = getTestRule({ plugins });
globalThis.testRuleConfigs = getTestRuleConfigs({ plugins });
