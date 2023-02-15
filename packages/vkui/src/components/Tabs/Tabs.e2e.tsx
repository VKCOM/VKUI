/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon16Dropdown, Icon20PictureOutline, Icon24PictureOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { TabsItem, TabsItemProps } from '../TabsItem/TabsItem';
import { Tabs, TabsModeContext } from './Tabs';

function useIconByMode() {
  const { mode } = React.useContext(TabsModeContext);
  return mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />;
}

const Unscrollable = ({
  status,
  children,
}: {
  status?: TabsItemProps['status'];
  children?: React.ReactNode;
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

describe('Tabs', () => {
  describeScreenshotFuzz(Tabs, [
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
        <Unscrollable key="tabs" status={23} />,
        <Unscrollable key="tabs" status={23}>
          <TabsItem>Лента</TabsItem>
        </Unscrollable>,
        <Scrollable key="tabs" />,
        <Scrollable key="tabs" disabled />,
      ],
    },
  ]);
});
