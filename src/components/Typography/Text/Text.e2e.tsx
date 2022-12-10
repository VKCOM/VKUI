import * as React from 'react';
import { describeScreenshotFuzz } from '../../../testing/e2e/utils';
import { Text, TextProps } from './Text';

describe('Text', () => {
  describeScreenshotFuzz(
    (props: TextProps) => (
      <Text {...props} style={{ marginBottom: 16 }}>
        Text {props.weight}
      </Text>
    ),
    [
      {
        weight: ['3'],
        $adaptivity: 'y',
      },
      {
        weight: ['2', '1'],
      },
    ],
  );
});
