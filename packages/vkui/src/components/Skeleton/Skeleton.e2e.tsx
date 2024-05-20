import { test } from '@vkui-e2e/test';
import { SkeletonPlayground } from './Skeleton.e2e-playground';

test('Skeleton', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SkeletonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
