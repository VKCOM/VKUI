import * as React from 'react';
import { Icon56UserAddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Placeholder, type PlaceholderProps } from './Placeholder';

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

export const PlaceholderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
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
      ]}
    >
      {(props: PlaceholderProps) => <Placeholder {...props} />}
    </ComponentPlayground>
  );
};
