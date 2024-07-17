import { test } from '@playwright/test';
import { withOptions } from '../../shared/urlOptions';
import { runMeasure } from '../../testing/fixtures';

const URL = '/noop';

test.use({ viewport: { width: 1280, height: 760 } });

test('noop', ({ page }, testInfo) => runMeasure('noop', page, testInfo));

test('noop with providers', ({ page }, testInfo) =>
  runMeasure(withOptions(URL, { withProviders: true }), page, testInfo));
