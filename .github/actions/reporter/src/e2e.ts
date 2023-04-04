import * as core from '@actions/core';
import type { JSONReport, JSONReportSuite, JSONReportTest } from '@playwright/test/reporter';

import { parseFile } from './shared';

function getFailedTestByTestResult(tests: JSONReportTest[]) {
  return tests.reduce((totalCount, test) => {
    if (Array.isArray(test.results)) {
      test.results.forEach((result) => {
        if (result.status === 'failed') {
          totalCount += 1;
        }
      });
    }
    return totalCount;
  }, 0);
}

function getFailedTestsCountBySuites(suites: JSONReportSuite[]) {
  return suites.reduce<number>((totalCount, suite) => {
    if (Array.isArray(suite.specs)) {
      suite.specs.forEach((spec) => {
        if (Array.isArray(suite.suites)) {
          totalCount += getFailedTestsCountBySuites(suite.suites);
        }
        if (Array.isArray(spec.tests)) {
          totalCount += getFailedTestByTestResult(spec.tests);
        }
      });
    }
    return totalCount;
  }, 0);
}

export async function e2e(testResultsJsonPath: string) {
  const { suites, errors } = await parseFile<JSONReport>(testResultsJsonPath);

  if (errors.length > 1) {
    core.error('You have some critical errors. See Playwright Report', {
      title: 'Screenshots',
    });
  }

  const foundFiledTests = getFailedTestsCountBySuites(suites);
  if (foundFiledTests > 0) {
    core.error(`You have ${foundFiledTests} failed tests. See Playwright Report`, {
      title: 'Screenshots',
    });
  }
}
