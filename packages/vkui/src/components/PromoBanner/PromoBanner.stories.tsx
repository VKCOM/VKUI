import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PromoBanner, PromoBannerProps } from './PromoBanner';

const story: Meta<PromoBannerProps> = {
  title: 'Advertisement/PromoBanner',
  component: PromoBanner,
  parameters: {
    ...CanvasFullLayout,
    centered: false,
    ...DisableCartesianParam,
  },
};

export default story;

const Template: Story<PromoBannerProps> = (args) => <PromoBanner {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  bannerData: {
    title: 'Заголовок',
    domain: 'vk.com',
    trackingLink: 'https://vk.com',
    ctaText: 'Перейти',
    advertisingLabel: 'Реклама',
    iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
    description: 'Описание рекламы',
    ageRestrictions: '14+',
    statistics: [
      { url: '', type: 'playbackStarted' },
      { url: '', type: 'click' },
    ],
  },
};
