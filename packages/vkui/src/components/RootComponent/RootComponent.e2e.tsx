import { test } from '@vkui-e2e/test';
import { RootComponentPlayground } from './RootComponent.e2e-playground';

test('RootComponent', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<RootComponentPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
