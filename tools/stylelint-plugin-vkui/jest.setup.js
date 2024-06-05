import { getTestRule, getTestRuleConfigs } from 'jest-preset-stylelint';
import plugins from './index.js';

global.testRule = getTestRule({ plugins });
global.testRuleConfigs = getTestRuleConfigs({ plugins });
