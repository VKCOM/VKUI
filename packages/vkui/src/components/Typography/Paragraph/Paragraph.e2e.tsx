import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Paragraph, ParagraphProps } from './Paragraph';

describe('Paragraph', () => {
  describeScreenshotFuzz(
    (props: ParagraphProps) => (
      <Paragraph {...props} style={{ marginBottom: 16 }}>
        Paragraph {props.weight}
      </Paragraph>
    ),
    [
      {
        weight: ['3', '2', '1'],
      },
      {
        normalize: [true],
      },
    ],
  );
});
