import * as React from 'react';
import type { Decorator, ReactRenderer } from '@storybook/react';
import type { StoryContext, StrictArgs, StrictArgTypes } from 'storybook/internal/types';

const CartesianContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
  margin: '10px',
  gap: '5px',
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

interface CartesianPropType extends StrictArgs {
  cartesian?: { [s: string]: unknown } | ArrayLike<unknown>;
}

function cartesianFunc(
  propDesc: CartesianPropType['cartesian'] = [],
  argTypes: StrictArgTypes<CartesianPropType>,
) {
  return Object.entries(propDesc).reduce(
    (acc, [prop, values]: [string, any]) => {
      const res: any[] = [];
      acc.forEach((props) => {
        values.forEach((value: any) => {
          const mapping = argTypes[prop].mapping;
          res.push({
            ...props,
            [prop]: mapping ? mapping[value] : value,
          });
        });
      });
      return res;
    },
    [{}],
  );
}

export const withCartesian: Decorator = (StoryFn, context) => {
  const {
    argTypes,
    args: { cartesian, ...restArgs },
  } = context as StoryContext<ReactRenderer, CartesianPropType>;

  if (cartesian) {
    const variants = cartesianFunc(cartesian, argTypes);

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
