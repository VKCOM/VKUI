import { test } from '@vkui-e2e/test';
import {
  PanelHeaderBackPlayground,
  PanelHeaderButtonPlayground,
  PanelHeaderClosePlayground,
  PanelHeaderEditPlayground,
  PanelHeaderSubmitPlayground,
} from './PanelHeaderButton.e2e-playground';

test('PanelHeaderButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('PanelHeaderClose', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderClosePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('PanelHeaderBack', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderBackPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('PanelHeaderEdit', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderEditPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('PanelHeaderSubmit', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderSubmitPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
