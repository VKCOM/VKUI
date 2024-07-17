import fs from 'node:fs';
import path from 'node:path';
import type { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import CliTable from 'cli-table3';
import { ATTACHMENT_METRICS_NAME, ATTACHMENT_SAMPLE_NAME } from '../../shared/constants';
import { isPerformanceMeasure } from '../../shared/guards';
import { humanFileSize } from '../../shared/humanFleSize';
import { format, getMean, getMedian, getStdDev } from './math';
import type {
  Attachment,
  MeasureStats,
  ParsedPerformanceMetrics,
  PerformanceMetrics,
  Table,
} from './types';

const OUTPUT_DIR = path.resolve(__dirname, '../../tmp');

export class BenchmarkReporter implements Reporter {
  private allMeasures = new Map<string, number[]>();
  private allMetrics = new Map<string, PerformanceMetrics[]>();

  onTestEnd(test: TestCase, result: TestResult) {
    if (!BenchmarkReporter.isPassed(result)) {
      return;
    }

    const testMeasures = this.allMeasures.get(test.title) || [];
    const testMetrics = this.allMetrics.get(test.title) || [];

    result.attachments.forEach((attachment) => {
      const performanceMeasure = BenchmarkReporter.parseMeasureAttachment(attachment);
      if (performanceMeasure !== null) {
        testMeasures.push(performanceMeasure.duration);
        return;
      }

      const performanceMetrics = BenchmarkReporter.parseMetricsAttachment(attachment);
      if (performanceMetrics !== null) {
        testMetrics.push(
          performanceMetrics
            .filter(({ name }) => BenchmarkReporter.METRICS_INCLUDE_LIST.includes(name))
            .sort((a, b) => (a.name > b.name ? 1 : -1)),
        );
        return;
      }
    });

    this.allMeasures.set(test.title, testMeasures);
    this.allMetrics.set(test.title, testMetrics);
  }

  async onEnd() {
    const reports: string[] = [];

    this.allMeasures.forEach((samples, testTitle) => {
      const tables = BenchmarkReporter.resultsToTables(
        BenchmarkReporter.getPerformanceMeasuresSummary(samples),
        BenchmarkReporter.getPerformanceMetricsSummary(this.allMetrics.get(testTitle)),
      );

      BenchmarkReporter.log(testTitle, tables);

      reports.push(BenchmarkReporter.toMarkdown(testTitle, tables));
    });

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    return fs.promises.writeFile(`${OUTPUT_DIR}/benchmark.md`, reports.join('\n\n'), 'utf-8');
  }

  private static isPassed(result: TestResult) {
    return result.status === 'passed';
  }

  private static parseMeasureAttachment(attachment: Attachment): PerformanceMeasure | null {
    if (attachment.name === ATTACHMENT_SAMPLE_NAME && Buffer.isBuffer(attachment.body)) {
      const data = JSON.parse(attachment.body.toString());
      return isPerformanceMeasure(data) ? data : null;
    }
    return null;
  }

  private static parseMetricsAttachment(attachment: Attachment): PerformanceMetrics | null {
    if (attachment.name === ATTACHMENT_METRICS_NAME && Buffer.isBuffer(attachment.body)) {
      const data = JSON.parse(attachment.body.toString());
      return Array.isArray(data) ? data : null;
    }
    return null;
  }

  private static getPerformanceMeasuresSummary(measures: number[] = []): MeasureStats {
    return {
      samples: measures,
      sampleCount: measures.length,
      mean: getMean(measures),
      stdDev: getStdDev(measures),
      min: Math.min.apply(null, measures),
      median: getMedian(measures),
      max: Math.max.apply(null, measures),
    };
  }

  private static getPerformanceMetricsSummary(
    allMetrics: PerformanceMetrics[] = [],
  ): ParsedPerformanceMetrics {
    const result: ParsedPerformanceMetrics = [];
    const metricValues = new Map<PerformanceMetrics[number]['name'], number[]>();

    allMetrics.forEach((metrics) => {
      metrics.forEach(({ name, value }) => {
        const values = metricValues.get(name) || [];
        values.push(value);
        metricValues.set(name, values);
      });
    });

    metricValues.forEach((values, name) => {
      const medianValue = getMedian(values);
      result.push({
        name,
        value: BenchmarkReporter.METRICS_WITH_SIZE_VALUE.includes(name)
          ? humanFileSize(medianValue)
          : medianValue,
      });
    });

    return result;
  }

  private static resultsToTables(
    measureStats: MeasureStats,
    metricsProp?: ParsedPerformanceMetrics,
  ): Table[] {
    const tables: Table[] = [];

    const { sampleCount, median, mean, min, max, stdDev } = measureStats;

    tables.push([
      ['sampleCount', 'mean', 'stdDev', 'min', 'median', 'max'],
      [sampleCount, format(mean), `±${format(stdDev)}ms`, format(min), format(median), format(max)],
    ]);

    if (metricsProp) {
      const [heads, cells] = metricsProp.reduce<Table>(
        (acc, { name, value }) => {
          acc[0].push(name);
          acc[1].push(value);
          return acc;
        },
        [[], []],
      );
      tables.push([heads, cells]);
    }

    return tables;
  }

  private static log(title: string, result: Table[]) {
    console.group(`${title}:`);
    result.forEach((table) => {
      const cliTable = new CliTable({ head: table[0] });
      cliTable.push(table[1]);
      console.log(cliTable.toString());
    });
    console.groupEnd();
  }

  private static toMarkdown(title: string, tables: Table[]) {
    const markdownTables = tables.map(
      ([heads, cells]) =>
        `| ${heads.join(' | ')} |\n| ${new Array(heads.length).fill('---').join(' | ')} |\n| ${cells.join(' | ')} |`,
    );

    return `### ${title}

${markdownTables.join('\n\n')}`;
  }

  private static METRICS_WITH_SIZE_VALUE = ['JSHeapUsedSize', 'JSHeapTotalSize'];

  private static METRICS_INCLUDE_LIST = [
    'JSEventListeners',
    'LayoutCount',
    'RecalcStyleCount',
    'LayoutDuration',
    'RecalcStyleDuration',
    'ScriptDuration',
    'TaskDuration',
    ...BenchmarkReporter.METRICS_WITH_SIZE_VALUE,
  ];
}
