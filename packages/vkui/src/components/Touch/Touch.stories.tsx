import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Touch, TouchEvent, TouchProps } from './Touch';

const story: Meta<TouchProps> = {
  title: 'Service/Touch',
  component: Touch,
  parameters: {
    ...CanvasFullLayout,
    cantered: false,
    ...DisableCartesianParam,
  },
};

export default story;

type Story = StoryObj<TouchProps>;

const circleStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'var(--vkui--color_background_accent)',
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: -20,
  marginTop: -20,
} as React.CSSProperties;

const containerStyle = {
  height: 200,
  width: '50%',
  border: '8px solid var(--vkui--color_icon_secondary)',
  position: 'relative',
} as React.CSSProperties;

export const Playground: Story = {
  render: function Render(args) {
    const [shiftX, setShiftX] = React.useState(0);
    const [shiftY, setShiftY] = React.useState(0);
    const [limitX, setLimitX] = React.useState(0);
    const [limitY, setLimitY] = React.useState(0);

    const circleRef = React.useRef<HTMLDivElement | null>(null);
    const startX = React.useRef(0);
    const startY = React.useRef(0);

    // eslint-disable-next-line no-restricted-properties,react-hooks/exhaustive-deps,no-restricted-properties
    React.useLayoutEffect(() => {
      if (circleRef.current) {
        setLimitX(circleRef.current.offsetLeft);
        setLimitY(circleRef.current.offsetTop);
      }
    });

    const getValueWithLimit = (value: number, limit: number) => {
      return value > limit ? limit : value < -limit ? -limit : value;
    };

    const onMove = (e: TouchEvent) => {
      const shiftX = startX.current + e.shiftX;
      const shiftY = startY.current + e.shiftY;

      setShiftX(getValueWithLimit(shiftX, limitX));
      setShiftY(getValueWithLimit(shiftY, limitY));
    };

    const onEnd = (e: TouchEvent) => {
      const shiftX = startX.current + e.shiftX;
      const shiftY = startY.current + e.shiftY;

      startX.current = getValueWithLimit(shiftX, limitX);
      startY.current = getValueWithLimit(shiftY, limitY);
    };

    const limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;

    return (
      <div
        style={{
          ...containerStyle,
          borderColor: limitExceeded
            ? 'var(--vkui--color_icon_negative)'
            : 'var(--vkui--color_icon_secondary)',
        }}
      >
        <Touch
          {...args}
          getRootRef={circleRef}
          onMove={onMove}
          onEnd={onEnd}
          style={{
            ...circleStyle,
            transform: `translate(${shiftX}px, ${shiftY}px)`,
          }}
        />
      </div>
    );
  },
};
