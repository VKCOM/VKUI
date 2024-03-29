import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import {} from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
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

export const HorizontalCellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: ['Header'],
          subtitle: ['Just subtitle'],
          extraSubtitle: ['Some extra subtitle'],
        },
        {
          header: ['Very long title example'],
        },
      ]}
    >
      {({ header, subtitle, extraSubtitle, ...restProps }: HorizontalCellProps) => (
        <div style={containerStyle}>
          <HorizontalCell {...restProps} header={header} size="s">
            <Avatar size={56} />
          </HorizontalCell>
          <HorizontalCell
            {...restProps}
            header={header}
            subtitle={subtitle}
            extraSubtitle={extraSubtitle}
            size="m"
          >
            <Image size={88} borderRadius="l" />
          </HorizontalCell>
          <HorizontalCell
            {...restProps}
            header={header}
            subtitle={subtitle}
            extraSubtitle={extraSubtitle}
            size="l"
          >
            <Image size={128} borderRadius="l" />
          </HorizontalCell>
        </div>
      )}
    </ComponentPlayground>
  );
};
