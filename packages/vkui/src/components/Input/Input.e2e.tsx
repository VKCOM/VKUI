import * as React from 'react';
import { Icon24User } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Input, InputProps } from './Input';

describe('Input', () => {
  describeScreenshotFuzz(
    (props: InputProps) => <Input value="Иванов" {...props} />,
    [
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
    ],
  );
});
