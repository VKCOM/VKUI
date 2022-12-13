import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Card, CardProps } from './Card';

describe('Card', () => {
  describeScreenshotFuzz(
    (props: CardProps) => (
      <Card {...props} className="vkuiProps">
        Карточка?
      </Card>
    ),
    [
      {
        mode: ['tint', 'shadow', 'outline'],
      },
    ],
  );
});
