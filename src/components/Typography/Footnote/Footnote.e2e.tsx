import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Footnote, FootnoteProps } from './Footnote';

describe('Footnote', () => {
  describeScreenshotFuzz(
    (props: FootnoteProps) => (
      <Footnote {...props} style={{ marginBottom: 16 }}>
        Footnote {props.caps && 'CAPS'} {props.weight}
      </Footnote>
    ),
    [
      {
        weight: [undefined, '1', '2', '3'],
        caps: [undefined, true],
      },
    ],
  );
});
