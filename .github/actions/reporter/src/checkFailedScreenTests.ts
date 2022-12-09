import * as core from '@actions/core';

import { parseFile } from './shared';

interface E2EResult {
  numFailedTestSuites: number;
  numFailedTests: number;
  numPassedTestSuites: number;
  numPassedTests: number;
  numPendingTestSuites: number;
  numPendingTests: number;
  numRuntimeErrorTestSuites: number;
  numTodoTests: number;
  numTotalTestSuites: number;
  numTotalTests: number;
  openHandles: any[];
  snapshot: Snapshot;
  startTime: number;
  success: boolean;
  testResults: TestResult[];
  wasInterrupted: boolean;
}

interface Snapshot {
  added: number;
  didUpdate: boolean;
  failure: boolean;
  filesAdded: number;
  filesRemoved: number;
  filesRemovedList: any[];
  filesUnmatched: number;
  filesUpdated: number;
  matched: number;
  total: number;
  unchecked: number;
  uncheckedKeysByFile: any[];
  unmatched: number;
  updated: number;
}

interface TestResult {
  assertionResults: AssertionResult[];
  endTime: number;
  message: string;
  name: string;
  startTime: number;
  status: string;
  summary: string;
}

interface AssertionResult {
  ancestorTitles: string[];
  failureMessages: any[];
  fullName: string;
  location: any;
  status: string;
  title: string;
}

export async function checkFailedScreenTests(testResultsJsonPath: string) {
  const { numFailedTests, snapshot, testResults } = await parseFile<E2EResult>(testResultsJsonPath);

  // ignore failed screenshots
  if (numFailedTests > snapshot.unmatched) {
    testResults
      .filter((suite) => suite.status === 'failed')
      .forEach((failed) =>
        core.error(failed.message, {
          title: 'Screenshots',
        }),
      );
  }
}
