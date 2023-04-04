import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Card, type CardProps } from './Card';

export const CardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CardProps>
      {...props}
      propSets={[
        {
          mode: ['tint', 'shadow', 'outline'],
        },
      ]}
    >
      {(props) => (
        <Card {...props} className={TEST_CLASS_NAMES.CONTENT}>
          Карточка
        </Card>
      )}
    </ComponentPlayground>
  );
};
