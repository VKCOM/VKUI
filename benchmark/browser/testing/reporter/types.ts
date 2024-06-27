import type { TestResult } from '@playwright/test/reporter';
import type { RENDER_DURATION } from './constants';

export type Attachment = TestResult['attachments'][0];

export type BenchmarkData = { [RENDER_DURATION]: number };
