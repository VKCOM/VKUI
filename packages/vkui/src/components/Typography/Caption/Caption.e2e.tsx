import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Caption, CaptionProps } from './Caption';

describe('Caption', () => {
  describeScreenshotFuzz(
    (props: CaptionProps) => (
      <Caption {...props} style={{ marginBottom: 16 }}>
        Caption lvl{props.level} {props.caps && 'CAPS'} {props.weight}
      </Caption>
    ),
    [
      {
        level: ['1', '2', '3'],
        weight: [undefined, '1', '2', '3'],
        caps: [undefined, true],
      },
      {
        normalize: [false],
      },
    ],
  );
});
