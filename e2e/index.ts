import { ReactElement } from 'react';

/**
 * Хелперы для тестов jest + playwright. В браузерной сборке подменяются на browser/mount.
 */

export function mount(jsx: ReactElement): Promise<void>;
export async function mount() {
  const testName = expect.getState().currentTestName;
  /* istanbul ignore next */
  await page.evaluate(({ testName }) => {
    return (window as any).testHandle.mount(testName);
  }, { testName });
}

export async function screenshot(jsx: ReactElement) {
  await mount(jsx);
  // font load affects layout
  /* istanbul ignore next */
  await page.evaluate(() => (document as any).fonts.ready);
  /* istanbul ignore next */
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
