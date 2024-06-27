import { test } from '@playwright/test';
import { runMeasure } from '../../testing/fixtures';

test.use({ viewport: { width: 1280, height: 760 } });

test('test', ({ page }, testInfo) => runMeasure(page, testInfo));
