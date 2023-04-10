import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24SmileOutline, Icon28SmileOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { AdaptiveIconRenderer, AdaptiveIconRendererProps } from './AdaptiveIconRenderer';

const story: Meta<AdaptiveIconRendererProps> = {
  title: 'Blocks/AdaptiveIconRenderer',
  component: AdaptiveIconRenderer,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<AdaptiveIconRendererProps>;

export const Playground: Story = {
  render: () => (
    <AdaptiveIconRenderer IconCompact={Icon24SmileOutline} IconRegular={Icon28SmileOutline} />
  ),
};
