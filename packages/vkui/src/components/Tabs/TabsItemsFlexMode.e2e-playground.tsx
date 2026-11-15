import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { TabsItem } from '../TabsItem/TabsItem';
import { Tabs, type TabsProps } from './Tabs';

export const TabsItemsFlexModePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        mode: ['default', 'accent', 'secondary'],
        layoutFillMode: ['auto', 'shrinked', 'stretched'],
      },
    ]}
  >
    {(props: TabsProps) => (
      <>
        <Tabs {...props}>
          <TabsItem onClick={noop}>Unscrollable</TabsItem>
          <TabsItem onClick={noop} selected>
            Unscrollable
          </TabsItem>
        </Tabs>
        <HorizontalScroll key="scrolled" arrowSize="m" withPadding={props.mode !== 'default'}>
          <Tabs {...props}>
            <TabsItem onClick={noop} key="groups">
              Scrollable
            </TabsItem>
            <TabsItem onClick={noop} key="news" selected>
              Scrollable
            </TabsItem>
          </Tabs>
        </HorizontalScroll>
      </>
    )}
  </ComponentPlayground>
);
