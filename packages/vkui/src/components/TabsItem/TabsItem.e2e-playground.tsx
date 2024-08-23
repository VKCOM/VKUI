import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
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
