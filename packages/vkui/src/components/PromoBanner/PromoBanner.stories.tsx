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
    adChoices: {
      options: [
        {
          name: 'О рекламодателе',
          onClick: () => {
            // eslint-disable-next-line no-restricted-globals
            window.open('https://vk.com', '_blank')?.focus();
          },
          shouldCloseAd: false,
        },
        {
          name: 'Скопировать ID (2VtzqxC9CNb)',
          onClick: () => {
            // eslint-disable-next-line compat/compat
            void navigator.clipboard.writeText('2VtzqxC9CNb');
          },
          shouldCloseAd: false,
        },
        {
          name: 'Не интересно',
          onClick: () => {
            // eslint-disable-next-line no-restricted-globals
            window.open('https://vk.com', '_blank')?.focus();
          },
          shouldCloseAd: true,
        },
        {
          name: 'Уже приобретено',
          onClick: () => {
            // eslint-disable-next-line no-restricted-globals
            window.open('https://vk.com', '_blank')?.focus();
          },
          shouldCloseAd: true,
        },
      ],
    },
  },
};
