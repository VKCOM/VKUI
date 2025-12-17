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

const Items = (props: React.ComponentProps<typeof HorizontalCell>) => {
  return new Array(20).fill(0).map((_, i) => (
    <HorizontalCell key={i} title={`item ${i}`} {...props}>
      <Avatar size={56} />
    </HorizontalCell>
  ));
};

const baseRender = (props: HorizontalScrollProps) => <HorizontalScroll {...props} />;

export const HorizontalScrollMobilePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          showArrows: ['always'],
          arrowSize: ['s', 'm'],
          children: [<Items key="0" onClick={noop} />],
        },
        {
          showArrows: ['always'],
          $direction: 'rtl',
          children: [<Items key="0" onClick={noop} />],
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
          children: [<Items key="0" onClick={noop} />],
        },
        {
          showArrows: ['always'],
          dir: ['rtl'],
          children: [<Items key="0" onClick={noop} />],
        },
      ]}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const HorizontalScrollHoverTestPlayground = ({
  colorScheme,
  ...restProps
}: ComponentPlaygroundProps) => {
  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
        <AppDefaultWrapper>
          <HorizontalScroll
            {...restProps}
            getRef={(element) => {
              if (!element) {
                return;
              }
              element.scrollLeft = 32;
            }}
          >
            <Items onClick={noop} />
          </HorizontalScroll>
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const HorizontalScrollWithFocusVisible = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: HorizontalScrollProps) => (
      <HorizontalScroll {...props}>
        <Items />
      </HorizontalScroll>
    )}
  </ComponentPlayground>
);
