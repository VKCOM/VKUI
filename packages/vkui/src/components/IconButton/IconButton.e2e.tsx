import { expect, test } from '@vkui-e2e/test';
test('IconButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('IconButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test.describe('20px icon geometry', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });

  test('keeps icons centered across densities and media queries', async ({
    mount,
    page,
    componentPlaygroundProps,
  }) => {
    const originalViewport = page.viewportSize()!;
    try {
      await mount('IconButtonGeometryPlayground', componentPlaygroundProps);

      for (const { width, height, fallbackPadding } of [
        { width: 767, height: 720, fallbackPadding: 14 },
        { width: 768, height: 720, fallbackPadding: 12 },
        { width: 767, height: 414, fallbackPadding: 12 },
      ]) {
        await page.setViewportSize({ width, height });

        for (const [density, padding] of [
          ['regular', 14],
          ['compact', 12],
          ['none', fallbackPadding],
        ] as const) {
          for (const [role, icon] of [
            ['button', 'document'],
            ['link', 'support'],
          ] as const) {
            const button = page.getByRole(role, { name: `${density} ${icon}`, exact: true });
            await expect(button).toBeVisible();
            const geometry = await button.evaluate((element) => {
              const svg = element.querySelector('svg')!;
              const buttonBounds = element.getBoundingClientRect();
              const svgBounds = svg.getBoundingClientRect();
              const style = getComputedStyle(svg);
              const top = parseFloat(style.paddingTop);
              const right = parseFloat(style.paddingRight);
              const bottom = parseFloat(style.paddingBottom);
              const left = parseFloat(style.paddingLeft);
              return {
                width: buttonBounds.width,
                height: buttonBounds.height,
                iconWidth: svgBounds.width - left - right,
                iconHeight: svgBounds.height - top - bottom,
                padding: [
                  style.paddingTop,
                  style.paddingRight,
                  style.paddingBottom,
                  style.paddingLeft,
                ],
                offsets: [
                  svgBounds.left + left - buttonBounds.left,
                  buttonBounds.right - svgBounds.right + right,
                  svgBounds.top + top - buttonBounds.top,
                  buttonBounds.bottom - svgBounds.bottom + bottom,
                ],
              };
            });

            expect(geometry.width).toBeCloseTo(20 + padding * 2, 1);
            expect(geometry.height).toBeCloseTo(20 + padding * 2, 1);
            expect(geometry.iconWidth).toBeCloseTo(20, 1);
            expect(geometry.iconHeight).toBeCloseTo(20, 1);
            expect(geometry.padding).toEqual(Array(4).fill(`${padding}px`));
            for (const offset of geometry.offsets) {
              expect(offset).toBeCloseTo(padding, 1);
            }
          }
        }
      }
    } finally {
      await page.setViewportSize(originalViewport);
    }
  });
});
