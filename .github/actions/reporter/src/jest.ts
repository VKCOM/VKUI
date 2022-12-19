import * as core from '@actions/core';
import strip from 'strip-ansi';

import { parseFile } from './shared';

type Status = 'passed' | 'failed' | 'skipped' | 'pending' | 'todo' | 'disabled';

interface Callsite {
  column: number;
  line: number;
}

interface FormattedAssertionResult {
  ancestorTitles: string[];
  failureMessages: string[] | null;
  fullName: string;
  location?: Callsite | null;
  status: Status;
  title: string;
}

interface FormattedTestResults {
  numFailedTests: number;
  numFailedTestSuites: number;
  numPassedTests: number;
  numPassedTestSuites: number;
  numPendingTests: number;
  numPendingTestSuites: number;
  numRuntimeErrorTestSuites: number;
  numTotalTests: number;
  numTotalTestSuites: number;
  // snapshot: SnapshotSummary;
  startTime: number;
  success: boolean;
  testResults: FormattedTestResult[];
  wasInterrupted: boolean;
}

interface FormattedTestResult {
  message: string;
  name: string;
  summary: string;
  status: 'failed' | 'passed';
  startTime: number;
  endTime: number;
  coverage: unknown;
  assertionResults: FormattedAssertionResult[];
}

function getMessage({ failureMessages }: FormattedAssertionResult) {
  return strip(failureMessages?.join('\n\n') ?? '');
}

function getTitle({ ancestorTitles, title }: FormattedAssertionResult) {
  return ancestorTitles.concat(title).join(' > ');
}

function getLine({ location }: FormattedAssertionResult) {
  return location?.line || 0;
}

function getColumn(result: FormattedAssertionResult) {
  return result.location?.column || 0;
}

function getFile(fullPath: string) {
  return fullPath.replace(process.cwd(), '');
}

function reportFailed(fullPath: string, result: FormattedAssertionResult) {
  const message = getMessage(result);
  const title = getTitle(result);
  const file = getFile(fullPath);

  const line = getLine(result);
  const column = getColumn(result);

  core.error(message, {
    title,
    file,
    startLine: line,
    endLine: line,
    startColumn: column,
    endColumn: column,
  });
}

function checkResult(result: FormattedTestResult) {
  result.assertionResults
    .filter(({ status }) => status === 'failed')
    .forEach((assertionResult) => reportFailed(result.name, assertionResult));
}

export async function jest(lintPath: string) {
  try {
    const results = await parseFile<FormattedTestResults>(lintPath);
    if (results.success) {
      return;
    }

    results.testResults.filter(({ status }) => status === 'failed').forEach(checkResult);
  } catch (err) {
    if (err instanceof Error) core.error(`Could not read test results: ${err.message}`);
  }
}
