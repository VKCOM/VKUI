import { test } from '@playwright/test';
import { withOptions } from '../../shared/urlOptions';
import { runMeasure } from '../../testing/fixtures';

const URL = '/touch';

test.use({ viewport: { width: 1280, height: 760 } });

test('touch (single)', ({ page }, testInfo) => runMeasure(URL, page, testInfo));

test('touch width providers (single)', ({ page }, testInfo) =>
  runMeasure(withOptions(URL, { withProviders: true }), page, testInfo));

test('touch (multiple)', ({ page }, testInfo) =>
  runMeasure(withOptions(URL, { instanceCount: 1000 }), page, testInfo));

test('touch with providers (multiple)', ({ page }, testInfo) =>
  runMeasure(withOptions(URL, { instanceCount: 1000, withProviders: true }), page, testInfo));
