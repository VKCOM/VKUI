import { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function mount(jsx: ReactElement) {
  const testName = expect.getState().currentTestName;
  /* istanbul ignore next */
  await page.evaluate(({ testName }) => {
    window['testHandle'].mount(testName);
  }, { testName });
}

export async function screenshot(jsx: ReactElement) {
  await mount(jsx);
  const { width, height } = await page.evaluate(() => {
    const size = { width: 0, height: 0 };
    document.querySelectorAll('#mount > *').forEach((node) => {
      const { right, bottom } = node.getBoundingClientRect();
      size.width = Math.max(size.width, right);
      size.height = Math.max(size.height, bottom);
    });
    return size;
  });
  return page.screenshot({ fullPage: true, clip: { x: 0, y: 0, width, height } });
}
