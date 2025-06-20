import type { Meta, StoryObj } from '@storybook/react';
import { Icon24SmileOutline, Icon28SmileOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { AdaptiveIconRenderer, type AdaptiveIconRendererProps } from './AdaptiveIconRenderer';

const story: Meta<AdaptiveIconRendererProps> = {
  title: 'Utils/AdaptiveIconRenderer',
  component: AdaptiveIconRenderer,
  parameters: createStoryParameters(
    'AdaptiveIconRenderer',
    CanvasFullLayout,
    DisableCartesianParam,
  ),
};

export default story;

type Story = StoryObj<AdaptiveIconRendererProps>;

export const Playground: Story = {
  render: () => (
    <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />
  ),
};
