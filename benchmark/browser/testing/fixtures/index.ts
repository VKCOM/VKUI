import type { Page, TestInfo } from '@playwright/test';

const waitReactRendered = (page: Page) =>
  new Promise<void>((resolve) => {
    page.on('console', (message) => {
      if (message.text() === 'complete') {
        resolve();
      }
    });
  });

export const runMeasure = async (page: Page, testInfo: TestInfo) => {
  const isReactRendered = waitReactRendered(page);
  await page.goto(`/${testInfo.title}`);
  await isReactRendered;

  const renderDuration = await page.evaluate(() => (window.timing ? window.timing.render : NaN));

  await testInfo.attach('sample', {
    body: JSON.stringify({ renderDuration }),
    contentType: 'application/json',
  });

  await page.close();
};
