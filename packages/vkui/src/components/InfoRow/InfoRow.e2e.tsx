/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { InfoRow, InfoRowProps } from './InfoRow';

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
