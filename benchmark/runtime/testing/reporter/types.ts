import type { CDPSession } from '@playwright/test';
import type { TestResult } from '@playwright/test/reporter';

export type PerformanceMetrics = Extract<
  Awaited<Promise<ReturnType<CDPSession['send']>>>,
  { metrics: Array<{ name: string; value: number }> }
>['metrics'];

export type ParsedPerformanceMetrics = Array<{
  name: PerformanceMetrics[number]['name'];
  value: string | number;
}>;

export type Attachment = TestResult['attachments'][0];

export type MeasureStats = {
  samples: number[];
  sampleCount: number;
  mean: number;
  median: number;
  min: number;
  max: number;
  stdDev: number;
};

type Heads = string[];

type Cells = (number | string)[];

export type Table = [Heads, Cells];
