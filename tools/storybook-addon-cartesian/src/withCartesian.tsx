import * as React from 'react';
import { DecoratorFunction } from '@storybook/csf/dist/story';
import { ReactFramework } from '@storybook/react';

const CartesianContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
  margin: '10px',
  gap: '5px',
  boxSizing: 'border-box',
  alignItems: 'baseline',
};

function cartesianFunc(propDesc: { [s: string]: unknown } | ArrayLike<unknown>) {
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

export const withCartesian: DecoratorFunction<ReactFramework> = (StoryFn, context) => {
  const {
    args: { cartesian, ...restArgs },
  } = context;

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
