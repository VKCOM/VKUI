import * as React from 'react';
import { Icon24User } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Input, type InputProps } from './Input';

export const InputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<InputProps>
      {...props}
      propSets={[
        {
          align: [undefined, 'center', 'right'],
          after: [undefined, <Icon24User key="icon-24-user" />],
          disabled: [undefined, true],
        },
        {
          $adaptivity: 'y',
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props) => <Input value="Иванов" {...props} />}
    </ComponentPlayground>
  );
};
