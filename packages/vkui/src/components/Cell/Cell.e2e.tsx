import * as React from 'react';
import { expect, test } from '@vkui-e2e/test';
import { checkIfElementIsInsideYEdgesOfViewport, getLocatorMouseCoords } from '@vkui-e2e/utils';
import { Platform } from '../../lib/platform';
import {
  CellDraggableInModalPlayground,
  CellDraggablePlayground,
  CellPlayground,
} from './Cell.e2e-playground';
import { DEFAULT_DRAGGABLE_LABEL } from './constants';

test('Cell', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<CellPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Cell', () => {
  const getElScrollTop = (el: HTMLElement) => el.scrollTop;
  const waitMouseAction = () => new Promise((r) => setTimeout(r, 100));
  const waitScrollEnd = () => new Promise((r) => setTimeout(r, 1000));

  // 1. В Firefox неправильно отдаёт event.clientY когда в page.mouse.move(X, Y) параметр Y больше
  //    чем высота области видимости (например, высота 720px, а Y равен 721px).
  // 2. Тач-события пока плохо реализованы в Playwright, поэтому тестируем только на десктопе
  //    https://github.com/microsoft/playwright/issues/2903
  test.use({
    onlyForBrowsers: ['chromium', 'webkit'],
    onlyForPlatforms: [Platform.VKCOM],
    onlyForAppearances: ['light'],
  });

  const variants = ['global scroll', 'local scroll'];

  for (const name of variants) {
    test(`should stay on top and bottom edges of viewport (${name})`, async ({ page, mount }) => {
      const isGlobalScroll = name === 'global scroll';
      await mount(
        isGlobalScroll ? <CellDraggablePlayground /> : <CellDraggableInModalPlayground />,
      );

      const scrollElLocator = isGlobalScroll
        ? page.locator('body').locator('xpath=..')
        : page.getByTestId('scroll-element');
      const offsetParentLocator = page.getByTestId('offset-parent');
      const allCells = await offsetParentLocator.getByLabel(DEFAULT_DRAGGABLE_LABEL).all();
      const testCellIndex = 3;
      const firstCellIndex = 0;
      const lastCellIndex = allCells.length - 1;

      const cellDraggableTopLocator = page
        .getByTestId(`cell-item-${firstCellIndex}`)
        .getByLabel(DEFAULT_DRAGGABLE_LABEL);
      const cellDraggableBottomLocator = page
        .getByTestId(`cell-item-${lastCellIndex}`)
        .getByLabel(DEFAULT_DRAGGABLE_LABEL);

      const cellInnerLocator = page.getByTestId(`cell-item-${testCellIndex}`);
      const cellRootLocator = cellInnerLocator.locator('xpath=..');
      const cellDraggableLocator = cellInnerLocator.getByLabel(DEFAULT_DRAGGABLE_LABEL);

      expect(await cellInnerLocator.getAttribute('data-index')).toEqual(String(testCellIndex));

      // to bottom
      let [prevScrollTop, fromCoords, toCoords] = await Promise.all([
        scrollElLocator.evaluateHandle(getElScrollTop),
        getLocatorMouseCoords(cellDraggableLocator),
        getLocatorMouseCoords(cellDraggableBottomLocator),
      ]);
      await page.mouse.move(...fromCoords);
      await waitMouseAction();
      await page.mouse.down();
      await waitMouseAction();
      await page.mouse.move(...toCoords);
      await waitMouseAction();
      expect(await checkIfElementIsInsideYEdgesOfViewport('bottom', cellRootLocator, scrollElLocator, isGlobalScroll)).toBeTruthy(); // prettier-ignore
      await waitScrollEnd();
      await page.mouse.up();
      expect(await scrollElLocator.evaluateHandle(getElScrollTop)).not.toEqual(prevScrollTop);
      expect(await checkIfElementIsInsideYEdgesOfViewport('bottom', cellRootLocator, offsetParentLocator)).toBeTruthy(); // prettier-ignore
      expect(await cellInnerLocator.getAttribute('data-index')).toEqual(String(lastCellIndex));

      // to top
      [prevScrollTop, fromCoords, toCoords] = await Promise.all([
        scrollElLocator.evaluateHandle(getElScrollTop),
        getLocatorMouseCoords(cellDraggableLocator),
        getLocatorMouseCoords(cellDraggableTopLocator),
      ]);
      await page.mouse.move(...fromCoords);
      await waitMouseAction();
      await page.mouse.down();
      await waitMouseAction();
      await page.mouse.move(...toCoords);
      await waitMouseAction();
      expect(await checkIfElementIsInsideYEdgesOfViewport('top', cellRootLocator, scrollElLocator, isGlobalScroll)).toBeTruthy(); // prettier-ignore
      await waitScrollEnd();
      await page.mouse.up();
      expect(await scrollElLocator.evaluateHandle(getElScrollTop)).not.toEqual(prevScrollTop);
      expect(await checkIfElementIsInsideYEdgesOfViewport('top', cellRootLocator, offsetParentLocator)).toBeTruthy(); // prettier-ignore
      expect(await cellInnerLocator.getAttribute('data-index')).toEqual(String(firstCellIndex));
    });
  }
});
