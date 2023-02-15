/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon56UserAddOutline } from '@vkontakte/icons';
import { SizeType } from '../../lib/adaptivity';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Placeholder, PlaceholderProps } from './Placeholder';

const propsPlaceholder = {
  icon: [<Icon56UserAddOutline key="icon-56" />, undefined],
  action: [
    <ButtonGroup key="button-group" mode="vertical" align="center">
      <Button size="m">Button</Button>
      <Button size="m" mode="tertiary">
        Button
      </Button>
    </ButtonGroup>,
    <Button key="button" size="m">
      Button
    </Button>,
    <Button key="button" size="m" mode="tertiary">
      Button
    </Button>,
    undefined,
  ],
};

describe('Placeholder', () => {
  describeScreenshotFuzz(
    (props: PlaceholderProps) => <Placeholder {...props} />,
    [
      // All = On
      {
        header: ['Find friends'],
        children: ['The people you add as your friends will be displayed here'],
        ...propsPlaceholder,
      },
      // Subtitle = Off
      {
        header: ['Find friends'],
        ...propsPlaceholder,
      },
      // Title = Off
      {
        children: ['The people you add as your friends will be displayed here'],
        ...propsPlaceholder,
      },
      // Title, Subtitle = Off
      {
        icon: [<Icon56UserAddOutline key="icon-56" />],
        action: [
          <ButtonGroup key="button-group" mode="vertical">
            <Button size="m">Button</Button>
            <Button size="m" mode="tertiary">
              Button
            </Button>
          </ButtonGroup>,
          <Button key="button" size="m">
            Button
          </Button>,
          <Button key="button" size="m" mode="tertiary">
            Button
          </Button>,
        ],
      },
    ],
    { adaptivity: { sizeY: SizeType.REGULAR } },
  );
});
