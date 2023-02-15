/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Subhead, SubheadProps } from './Subhead';

describe('Subhead', () => {
  describeScreenshotFuzz(
    (props: SubheadProps) => (
      <Subhead {...props} style={{ marginBottom: 16 }}>
        Subhead {props.weight}
      </Subhead>
    ),
    [
      {
        weight: [undefined, '1', '2', '3'],
      },
    ],
  );
});
