import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { Tabs, type TabsProps } from '../Tabs/Tabs';
import { TabsItem } from './TabsItem';

export const TabsItemWithStatePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['default', 'accent', 'secondary'],
        },
      ]}
    >
      {(props: TabsProps) => (
        <Tabs {...props}>
          <TabsItem href="#">Кнопка</TabsItem>
          <TabsItem href="#" hovered>
            Кнопка
          </TabsItem>
          <TabsItem href="#" selected>
            Кнопка
          </TabsItem>
          <TabsItem href="#" selected hovered>
            Кнопка
          </TabsItem>
        </Tabs>
      )}
    </ComponentPlayground>
  );
};

export interface TabsItemScrollPlaygroundProps {
  clipping?: 'none' | 'below' | 'above' | 'partial-below' | 'ancestor' | 'border';
  direction?: 'ltr' | 'rtl';
  alignment?: TabsProps['scrollBehaviorToSelectedTab'];
  selectedIndex?: number;
}

export const TabsItemScrollPlayground = ({
  clipping = 'none',
  direction = 'ltr',
  alignment = 'nearest',
  selectedIndex = 0,
}: TabsItemScrollPlaygroundProps) => {
  const nested = clipping === 'ancestor';
  const spacerHeight =
    clipping === 'below' || nested
      ? 140
      : clipping === 'partial-below'
        ? 60
        : clipping === 'border'
          ? 20
          : 0;

  return (
    <ConfigProvider platform="vkcom" colorScheme="light" direction={direction}>
      <AppDefaultWrapper disableDecorations style={{ minHeight: 1200 }}>
        <div
          data-testid="vertical-scroll"
          data-scroll-container
          dir={direction}
          ref={(element) => {
            if (element && clipping === 'above') {
              element.scrollTop = 20;
            }
          }}
          style={{
            marginTop: 180,
            width: 320,
            height: 80,
            overflow: 'auto',
            overflowAnchor: 'none',
            border: clipping === 'border' ? '12px solid transparent' : undefined,
          }}
        >
          <div style={{ height: spacerHeight }} />
          <div
            data-testid="nested-scroll"
            data-scroll-container={nested || undefined}
            style={nested ? { height: 80, overflow: 'auto' } : undefined}
          >
            <Tabs withScrollToSelectedTab scrollBehaviorToSelectedTab={alignment}>
              <HorizontalScroll data-testid="horizontal-scroll" showArrows={false}>
                {Array.from({ length: clipping === 'none' ? 10 : 2 }, (_, index) => (
                  <TabsItem
                    key={index}
                    id={`scroll-tab-${index}`}
                    aria-controls={`scroll-panel-${index}`}
                    data-testid={`scroll-tab-${index}`}
                    selected={index === selectedIndex}
                    style={{ width: 120, minWidth: 120, maxWidth: 120, flex: '0 0 auto' }}
                  >
                    Вкладка {index + 1}
                  </TabsItem>
                ))}
              </HorizontalScroll>
            </Tabs>
            <div style={{ height: 160 }} />
          </div>
        </div>
      </AppDefaultWrapper>
    </ConfigProvider>
  );
};
