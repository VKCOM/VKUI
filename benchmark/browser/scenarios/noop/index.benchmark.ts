import { test } from '@playwright/test';
import { runMeasure } from '../../testing/fixtures';

test.use({ viewport: { width: 1280, height: 760 } });

test('noop', ({ page }, testInfo) => runMeasure(page, testInfo));
