import * as React from 'react';
import { Icon28CheckCircleOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Button } from '../../../Button/Button';
import { Basic, type SnackbarBasicProps } from './Basic';

export const BasicPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          before: [
            <Icon28CheckCircleOutline key="before" fill="var(--vkui--color_icon_positive)" />,
          ],
          children: ['Text message'],
          subtitle: ['Subtitle'],
          after: [
            <Button key="button" mode="link" appearance="accent" size="s">
              Button
            </Button>,
          ],
          mode: ['default'],
        },
        {
          before: [
            <Icon28CheckCircleOutline key="before" fill="var(--vkui--color_icon_positive)" />,
          ],
          children: ['Text message'],
          subtitle: ['Subtitle'],
          after: [
            <Button key="button" mode="link" appearance="overlay" size="s">
              Button
            </Button>,
          ],
          mode: ['dark'],
        },
        {
          before: [
            <Icon28CheckCircleOutline key="before" fill="var(--vkui--color_icon_positive)" />,
          ],
          children: ['Text message'],
          action: [
            <Button key="button" mode="link" appearance="accent" size="s">
              Action Button
            </Button>,
          ],
          layout: ['horizontal'],
        },
        {
          before: [
            <Icon28CheckCircleOutline key="before" fill="var(--vkui--color_icon_positive)" />,
          ],
          children: ['Text message'],
          action: [
            <Button key="button" mode="link" appearance="accent" size="s">
              Action Button
            </Button>,
          ],
          after: [
            <Button key="button" mode="link" appearance="accent" size="s">
              Button
            </Button>,
          ],
        },
      ]}
    >
      {(props: SnackbarBasicProps) => <Basic {...props} />}
    </ComponentPlayground>
  );
};
