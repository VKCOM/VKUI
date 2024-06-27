import type { Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import { BENCHMARK_SUITE_NAME, EXPECTED_ATTACHMENT_NAME, RENDER_DURATION } from './constants';
import type { Attachment, BenchmarkData } from './types';
import { getMeasures, printMeasure } from './utilities';

export class BenchmarkReporter implements Reporter {
  private samples = new Map<string, number[]>();

  onTestEnd(test: TestCase, result: TestResult) {
    if (!BenchmarkReporter.isExpectedSuite(test.parent) || !BenchmarkReporter.isPassed(result)) {
      return;
    }

    const testSamples = this.samples.get(test.title) || [];

    result.attachments.forEach((attachment) => {
      const benchmarkData = BenchmarkReporter.parseAttachment(attachment);
      if (benchmarkData !== null) {
        testSamples.push(benchmarkData[RENDER_DURATION]);
      }
    });

    this.samples.set(test.title, testSamples);
  }

  onEnd() {
    this.samples.forEach((samples, testTitle) => {
      const stats = getMeasures(samples);
      printMeasure(testTitle, stats);
    });
  }

  private static isPassed(result: TestResult) {
    return result.status === 'passed';
  }

  private static isExpectedSuite(suite: Suite) {
    return suite.title !== BENCHMARK_SUITE_NAME;
  }

  private static parseAttachment(attachment: Attachment): BenchmarkData | null {
    if (attachment.name === EXPECTED_ATTACHMENT_NAME && Buffer.isBuffer(attachment.body)) {
      const data = JSON.parse(attachment.body.toString());
      return typeof data === 'object' && RENDER_DURATION in data ? data : null;
    }
    return null;
  }
}
