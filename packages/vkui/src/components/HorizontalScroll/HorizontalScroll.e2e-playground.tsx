import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ViewWidth } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll, type HorizontalScrollProps } from './HorizontalScroll';

const items = new Array(20).fill(0).map((_, i) => (
  <HorizontalCell key={i} header={`item ${i}`} onClick={noop}>
    <Avatar size={56} />
  </HorizontalCell>
));

const baseRender = (props: HorizontalScrollProps) => <HorizontalScroll {...props} />;

export const HorizontalScrollMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
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
      {baseRender}
    </ComponentPlayground>
  );
};

export const HorizontalScrollSmallTabletPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          showArrows: [undefined, 'always'],
          arrowSize: ['m', 'l'],
          arrowOffsetY: [-10],
          children: [
            <div key="0" style={{ display: 'flex' }}>
              {items}
            </div>,
          ],
        },
      ]}
    >
      {baseRender}
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
