import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Title, TitleProps } from './Title';

describe('Title', () => {
  describeScreenshotFuzz(
    (props: TitleProps) => (
      <Title {...props} style={{ marginBottom: 16 }}>
        Title lvl{props.level} {props.weight}
      </Title>
    ),
    [
      {
        level: ['1'],
        weight: [undefined, '1', '2', '3'],
      },
      {
        level: ['2'],
        weight: [undefined, '1', '2', '3'],
      },
      {
        level: ['3'],
        weight: [undefined, '1', '2', '3'],
      },
      {
        normalize: [false],
      },
    ],
  );
});
