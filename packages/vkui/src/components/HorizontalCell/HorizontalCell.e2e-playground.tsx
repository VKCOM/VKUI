import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Image } from '../Image/Image';
import { HorizontalCell, type HorizontalCellProps } from './HorizontalCell';

const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  flexWrap: 'wrap',
  padding: 8,
};

const mapSizes = {
  s: 56,
  m: 88,
  l: 128,
  xl: 220,
  auto: 250,
};

export const HorizontalCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', 'm', 'l', 'xl', 'auto'],
          title: ['Title'],
          subtitle: ['Just subtitle'],
          extraSubtitle: ['Some extra subtitle'],
        },
        {
          size: ['s', 'm'],
          title: ['Very long title example'],
        },
        {
          size: [80],
          textAlign: ['start', 'center', 'end'],
          title: ['Title'],
          subtitle: ['Just subtitle'],
        },
        {
          size: ['s'],
          noPadding: [true],
        },
      ]}
    >
      {({ size, ...restProps }: HorizontalCellProps) => (
        <div style={containerStyle}>
          <HorizontalCell size={size} {...restProps}>
            <Image size={typeof size === 'string' ? mapSizes[size] : 56} borderRadius="l" />
          </HorizontalCell>
        </div>
      )}
    </ComponentPlayground>
  );
};
