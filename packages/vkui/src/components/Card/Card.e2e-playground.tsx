import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Card, type CardProps } from './Card';

export const CardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['tint', 'shadow', 'outline', 'outline-tint'],
        },
      ]}
    >
      {(props: CardProps) => (
        <Card {...props} className={TEST_CLASS_NAMES.CONTENT}>
          Карточка
        </Card>
      )}
    </ComponentPlayground>
  );
};
