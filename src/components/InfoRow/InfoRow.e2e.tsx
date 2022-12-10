import * as React from 'react';
import { InfoRow, InfoRowProps } from './InfoRow';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('InfoRow', () => {
  describeScreenshotFuzz(
    (props: InfoRowProps) => <InfoRow {...props} />,
    [
      {
        children: ['Команда ВКонтакте', undefined],
        header: ['Место работы', undefined],
      },
    ],
  );
});
