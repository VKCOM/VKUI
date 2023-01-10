import * as React from 'react';
import {
  Icon16MoreVertical,
  Icon16MessageHeart,
  Icon24MessageOutline,
  Icon28MessageOutline,
} from '@vkontakte/icons';
import { IconButtonProps, IconButton } from './IconButton';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('IconButton', () => {
  describeScreenshotFuzz(
    (props: IconButtonProps) => (
      <IconButton
        style={{ backgroundColor: 'var(--vkui--color_transparent--active)' }}
        {...props}
      />
    ),
    [
      {
        children: [
          <Icon28MessageOutline key="icon-w28" />,
          <Icon24MessageOutline key="icon-w24" />,
          <Icon16MessageHeart key="icon-w16" />,
          <Icon16MoreVertical key="icon-w08" />,
        ],
        $adaptivity: 'y',
      },
    ],
  );
});
