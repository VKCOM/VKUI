import * as React from 'react';
import { Icon16Dropdown, Icon20PictureOutline, Icon24PictureOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { HasChildren } from '../../types';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { TabsItem, TabsItemProps } from '../TabsItem/TabsItem';
import { Tabs, TabsModeContext, type TabsProps } from './Tabs';

function useIconByMode() {
  const { mode } = React.useContext(TabsModeContext);
  return mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />;
}

const Unscrollable = ({
  status,
  children,
}: HasChildren & {
  status?: TabsItemProps['status'];
}) => {
  const beforeIconByMode = useIconByMode();

  return (
    <React.Fragment>
      <TabsItem before={beforeIconByMode} status={status} after={<Icon16Dropdown />} selected>
        Новости
      </TabsItem>
      <TabsItem before={beforeIconByMode} status={status} after={<Icon16Dropdown />}>
        Интересное
      </TabsItem>
      {children}
    </React.Fragment>
  );
};

const Scrollable = ({ disabled }: { disabled?: boolean }) => {
  const beforeIconByMode = useIconByMode();

  return (
    <React.Fragment>
      <HorizontalScroll arrowSize="m">
        <TabsItem disabled={disabled}>Сообщества</TabsItem>
        <TabsItem before={beforeIconByMode} after={<Icon16Dropdown />} selected disabled={disabled}>
          Лента
        </TabsItem>
        <TabsItem
          before={beforeIconByMode}
          status={<Badge mode="prominent" />}
          after={<Icon16Dropdown />}
          disabled={disabled}
        >
          Рекомендации
        </TabsItem>
        <TabsItem
          before={beforeIconByMode}
          status={
            <Counter mode="prominent" size="s">
              3
            </Counter>
          }
          after={<Icon16Dropdown />}
          disabled={disabled}
        >
          Друзья
        </TabsItem>
        <TabsItem
          before={beforeIconByMode}
          status={23}
          after={<Icon16Dropdown />}
          disabled={disabled}
        >
          Фотографии
        </TabsItem>
      </HorizontalScroll>
    </React.Fragment>
  );
};

export const TabsPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['default', 'accent', 'secondary'],
          children: [
            <Unscrollable key="tabs" />,
            <Unscrollable key="tabs">
              <TabsItem>Лента</TabsItem>
            </Unscrollable>,
            <Unscrollable key="tabs" status={<Badge mode="prominent" />} />,
            <Unscrollable key="tabs" status={<Badge mode="prominent" />}>
              <TabsItem>Лента</TabsItem>
            </Unscrollable>,
            <Unscrollable
              key="tabs"
              status={
                <Counter mode="prominent" size="s">
                  3
                </Counter>
              }
            />,
            <Unscrollable
              key="tabs"
              status={
                <Counter mode="prominent" size="s">
                  3
                </Counter>
              }
            >
              <TabsItem>Лента</TabsItem>
            </Unscrollable>,
            <Unscrollable key="tabs" status={0} />,
            <Unscrollable key="tabs" status={23}>
              <TabsItem>Лента</TabsItem>
            </Unscrollable>,
            <Scrollable key="tabs" />,
            <Scrollable key="tabs" disabled />,
          ],
        },
      ]}
    >
      {(props: TabsProps) => <Tabs {...props} />}
    </ComponentPlayground>
  );
};

export const TabsItemsFlexModePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['default', 'accent', 'secondary'],
          children: [
            <>
              <TabsItem>Unscrollable</TabsItem>
              <TabsItem selected>Unscrollable</TabsItem>
            </>,
            <HorizontalScroll key="scrolled" arrowSize="m">
              <TabsItem key="groups">Scrollable</TabsItem>
              <TabsItem key="news" selected>
                Scrollable
              </TabsItem>
            </HorizontalScroll>,
          ],
          layoutFillMode: ['auto', 'shrinked', 'stretched'],
        },
      ]}
    >
      {(props: TabsProps) => <Tabs {...props} />}
    </ComponentPlayground>
  );
};
