import * as React from 'react';
import { Icon12Services, Icon16Services, Icon20ServicesFilled } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ContentBadge, type ContentBadgeProps } from './ContentBadge';

const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  flexWrap: 'wrap',
  outline: '1px dashed',
  padding: 24,
  backgroundColor: 'var(--vkui--color_background_content)',
};

const captionStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 6,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'fit-content',
  fontSize: 10,
};

export const ContentBadgePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', undefined, 'l'],
          capsule: [undefined, true],
        },
        {
          appearance: ['neutral', 'accent-green', 'accent-red', 'overlay'],
          mode: ['primary', 'secondary', 'outline'],
        },
      ]}
    >
      {({ size, capsule, children = 'Text', ...restProps }: ContentBadgeProps) => (
        <div style={containerStyle}>
          <ContentBadge {...restProps} size={size} capsule={capsule}>
            {children}
          </ContentBadge>

          <ContentBadge {...restProps} size={size} capsule={capsule}>
            <ContentBadge.SlotIcon>
              {size === 'l' ? <Icon16Services /> : <Icon12Services />}
            </ContentBadge.SlotIcon>
            {children}
          </ContentBadge>

          <ContentBadge {...restProps} size={size} capsule={capsule}>
            {children}
            <ContentBadge.SlotIcon>
              {size === 'l' ? <Icon16Services /> : <Icon12Services />}
            </ContentBadge.SlotIcon>
          </ContentBadge>

          <ContentBadge {...restProps} size={size} capsule={capsule}>
            <ContentBadge.SlotIcon>
              {size === 'l' ? <Icon16Services /> : <Icon12Services />}
            </ContentBadge.SlotIcon>
            {children}
            <ContentBadge.SlotIcon>
              {size === 'l' ? <Icon16Services /> : <Icon12Services />}
            </ContentBadge.SlotIcon>
          </ContentBadge>

          <ContentBadge
            {...restProps}
            size={size}
            // для варианта с одиночной иконкой зашиваем
            capsule
          >
            <ContentBadge.SlotIcon>
              {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
            </ContentBadge.SlotIcon>
          </ContentBadge>

          {size === 's' ? <div style={captionStyle}>should ignore icons</div> : null}
        </div>
      )}
    </ComponentPlayground>
  );
};
