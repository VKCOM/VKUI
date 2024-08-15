import { test } from '@vkui-e2e/test';
import { GroupPlayground, GroupWithExpandedContentPlayground } from './Group.e2e-playground';

test('Group', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<GroupPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('Group.ExpandedContent', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<GroupWithExpandedContentPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
