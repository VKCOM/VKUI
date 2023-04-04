import * as React from 'react';
import { Icon28VoiceOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { WriteBarIcon, type WriteBarIconProps } from './WriteBarIcon';

export const WriteBarIconPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['done'],
        },
        {
          mode: ['attach'],
          count: [undefined, 3],
        },
        {
          mode: ['send'],
          disabled: [undefined, true],
        },
        {
          mode: [undefined],
          children: [<Icon28VoiceOutline key="icon" />],
        },
      ]}
    >
      {(props: WriteBarIconProps) => <WriteBarIcon {...props} />}
    </ComponentPlayground>
  );
};
