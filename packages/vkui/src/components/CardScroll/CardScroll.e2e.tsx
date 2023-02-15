/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Card } from '../Card/Card';
import { CardScroll, CardScrollProps } from './CardScroll';

describe('CardScroll', () => {
  const items = new Array(20).fill(0).map((_, index) => (
    <Card key={index}>
      <div style={{ paddingBottom: '66%' }} />
    </Card>
  ));

  describeScreenshotFuzz(
    (props: CardScrollProps) => <CardScroll {...props}>{items}</CardScroll>,
    [
      {
        size: ['s', 'm', 'l', false],
      },
      {
        showArrows: [true, false, 'always'],
      },
      {
        withSpaces: [true, false],
      },
    ],
  );
});
