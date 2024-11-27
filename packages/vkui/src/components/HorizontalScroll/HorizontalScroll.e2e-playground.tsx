import { noop } from '@vkontakte/vkjs';
import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { ViewWidth } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll, type HorizontalScrollProps } from './HorizontalScroll';

const items = new Array(20).fill(0).map((_, i) => (
  <HorizontalCell key={i} title={`item ${i}`} onClick={noop}>
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
          arrowSize: ['s', 'm'],
          children: [items],
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
          arrowSize: ['s', 'm'],
          arrowOffsetY: [-10],
          children: [items],
        },
      ]}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const HorizontalScrollWithHasMousePlayground = ({
  colorScheme,
  ...restProps
}: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <AppDefaultWrapper disableDecorations>
          <HorizontalScroll
            {...restProps}
            getRef={(element) => {
              if (!element) {
                return;
              }
              element.scrollLeft = 32;
            }}
          >
            {items}
          </HorizontalScroll>
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const HorizontalScrollWithoutHasMousePlayground = ({
  colorScheme,
  ...restProps
}: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <AppDefaultWrapper disableDecorations>
          <HorizontalScroll
            {...restProps}
            getRef={(element) => {
              if (!element) {
                return;
              }
              element.scrollLeft = 32;
            }}
          >
            {items}
          </HorizontalScroll>
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
