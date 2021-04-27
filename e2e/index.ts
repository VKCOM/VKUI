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

export async function screenshot(jsx?: ReactElement, options: { selector?: string } = {}) {
  if (jsx) {
    await mount(jsx);
  }
  // font load affects layout
  /* istanbul ignore next */
  await page.evaluate(() => (document as any).fonts.ready);
  const { selector = '#mount > *:not(.AppRoot), .AppRoot > *' } = options;
  /* istanbul ignore next */
  const { x, y, bottom, right } = await page.evaluate((selector) => {
    const size = { right: 0, bottom: 0, x: Infinity, y: Infinity };
    document.querySelectorAll(selector).forEach((node) => {
      const { x, y, right, bottom } = node.getBoundingClientRect();
      size.right = Math.max(size.right, right);
      size.bottom = Math.max(size.bottom, bottom);
      size.x = Math.min(size.x, x);
      size.y = Math.min(size.y, y);
    });
    return size;
  }, selector);
  return page.screenshot({ fullPage: true, clip: { x, y, width: right - x, height: bottom - y } });
}
