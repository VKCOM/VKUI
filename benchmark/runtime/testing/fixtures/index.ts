import type { Page, TestInfo } from '@playwright/test';
import { ATTACHMENT_METRICS_NAME, ATTACHMENT_SAMPLE_NAME } from '../../shared/constants';
import { isPerformanceMeasure } from '../../shared/guards';

export const runMeasure = async (url: string, page: Page, testInfo: TestInfo): Promise<void> => {
  const waitPerformanceMeasure = initializeWaitPerformanceMeasure(page);
  const session = await page.context().newCDPSession(page);
  await session.send('Performance.enable');

  await page.goto(url);

  const performanceMeasure = await waitPerformanceMeasure;

  await testInfo.attach(ATTACHMENT_SAMPLE_NAME, {
    body: JSON.stringify(performanceMeasure),
    contentType: 'application/json',
  });

  const { metrics: performanceMetrics } = await session.send('Performance.getMetrics');

  await testInfo.attach(ATTACHMENT_METRICS_NAME, {
    body: JSON.stringify(performanceMetrics),
    contentType: 'application/json',
  });

  await page.close();
};

function initializeWaitPerformanceMeasure(page: Page): Promise<PerformanceMeasure> {
  return new Promise((resolve) => {
    page.on('console', async (message) => {
      if (message.type() === 'debug') {
        const payload = await message.args()[0].jsonValue();
        if (isPerformanceMeasure(payload)) {
          resolve(payload);
        }
      }
    });
  });
}
