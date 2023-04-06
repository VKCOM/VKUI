import * as React from 'react';
import { Decorator, ReactRenderer } from '@storybook/react';
import type { StoryContext, StrictArgs } from '@storybook/types';

const CartesianContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
  margin: '10px',
  gap: '5px',
  boxSizing: 'border-box',
  alignItems: 'baseline',
};

interface CartesianPropType extends StrictArgs {
  cartesian?: { [s: string]: unknown } | ArrayLike<unknown>;
}

function cartesianFunc(propDesc: CartesianPropType['cartesian'] = []) {
  return Object.entries(propDesc).reduce(
    (acc, [prop, values]: [string, any]) => {
      const res: any[] = [];
      acc.forEach((props) => {
        values.forEach((value: any) => {
          res.push({ ...props, [prop]: value });
        });
      });
      return res;
    },
    [{}],
  );
}

export const withCartesian: Decorator = (StoryFn, context) => {
  const {
    args: { cartesian, ...restArgs },
  } = context as StoryContext<ReactRenderer, CartesianPropType>;

  if (cartesian) {
    const variants = cartesianFunc(cartesian);

    return (
      <div style={CartesianContainerStyle}>
        {variants.map((ops, index) => {
          return <StoryFn key={index} args={{ ...restArgs, ...ops }} />;
        })}
      </div>
    );
  }

  return <StoryFn args={restArgs} />;
};
