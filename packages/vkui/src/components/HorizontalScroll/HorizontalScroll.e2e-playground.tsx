import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ViewWidth } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll, type HorizontalScrollProps } from './HorizontalScroll';

const items = new Array(20).fill(0).map((_, i) => (
  <HorizontalCell key={i} header={`item ${i}`}>
    <Avatar size={56} />
  </HorizontalCell>
));

const baseHorizontalScroll = (props: HorizontalScrollProps) => <HorizontalScroll {...props} />;

export const HorizontalScrollMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<HorizontalScrollProps>
      {...props}
      propSets={[
        {
          showArrows: ['always'],
          arrowSize: ['m', 'l'],
          children: [
            <div key="0" style={{ display: 'flex' }}>
              {items}
            </div>,
          ],
        },
      ]}
    >
      {baseHorizontalScroll}
    </ComponentPlayground>
  );
};

export const HorizontalScrollSmallTabletPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<HorizontalScrollProps>
      {...props}
      propSets={[
        {
          arrowSize: ['m', 'l'],
          children: [
            <div key="0" style={{ display: 'flex' }}>
              {items}
            </div>,
          ],
        },
      ]}
    >
      {baseHorizontalScroll}
    </ComponentPlayground>
  );
};

export const HorizontalScrollWithHasMousePlayground = ({
  appearance,
  ...restProps
}: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <AppRoot>
          <HorizontalScroll
            {...restProps}
            getRef={(element) => {
              if (!element) {
                return;
              }
              element.scrollLeft = 32;
            }}
          >
            <div key="0" style={{ display: 'flex' }}>
              {items}
            </div>
          </HorizontalScroll>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const HorizontalScrollWithoutHasMousePlayground = ({
  appearance,
  ...restProps
}: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <AppRoot>
          <HorizontalScroll
            {...restProps}
            getRef={(element) => {
              if (!element) {
                return;
              }
              element.scrollLeft = 32;
            }}
          >
            <div key="0" style={{ display: 'flex' }}>
              {items}
            </div>
          </HorizontalScroll>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
