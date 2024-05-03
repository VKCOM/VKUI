import { test } from '@vkui-e2e/test';
import { Mark } from './Mark';
import { MarkPlayground } from './Mark.e2e-playground';

test(Mark.name, async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<MarkPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
