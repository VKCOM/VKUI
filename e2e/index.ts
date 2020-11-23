import { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function mount(jsx: ReactElement) {
  await page.goto('http://localhost:9000');
  const testName = expect.getState().currentTestName;
  await page.evaluate(({ testName }) => {
    window['testHandle'].mount(testName);
  }, { testName });
}

export async function screenshot(jsx: ReactElement) {
  await mount(jsx);
  return page.screenshot({ fullPage: true });
}
