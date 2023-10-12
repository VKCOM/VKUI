import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
import { Avatar } from '../Avatar/Avatar';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Group } from '../Group/Group';
import { List } from '../List/List';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { Panel } from '../Panel/Panel';
import { Spacing } from '../Spacing/Spacing';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { View } from '../View/View';
import { Cell, type CellProps } from './Cell';
import type { SwappedItemRange } from './types';

export const CellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['selectable'],
          before: [<Avatar key="avatar" />],
          children: ['Мария Саломея Склодовская-Кюри', 'Михаил Лихачев'],
          $adaptivity: 'y',
          checked: [true, false],
          disabled: [true, false],
          multiline: [true, false],
        },
        {
          mode: ['removable'],
          $adaptivity: 'y',
          children: ['Мария Саломея Склодовская-Кюри', 'Евгения Полозова'],
          multiline: [true, false],
        },
        {
          draggable: [true],
          $adaptivity: 'y',
          children: ['Мария Саломея Склодовская-Кюри', 'Артур Стамбульцян'],
          multiline: [true, false],
        },
      ]}
    >
      {(props: CellProps) => <Cell {...props} />}
    </ComponentPlayground>
  );
};

const getInitialDraggableListState = () =>
  new Array(16).fill('Cell item').map((item, index) => ({ id: index, value: `${item} ${index}` }));

export const CellDraggablePlayground = () => {
  const [draggingList, updateDraggingList] = React.useState(getInitialDraggableListState);

  const handleDragFinish = ({ from, to }: SwappedItemRange) => {
    updateDraggingList((prev) => {
      const next = [...prev];
      next.splice(from, 1);
      next.splice(to, 0, prev[from]);
      return next;
    });
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel="test">
            <Panel id="test">
              <Spacing size={24} />
              <Group>
                <List data-testid="offset-parent">
                  {draggingList.map((item, index) => (
                    <Cell
                      key={item.id}
                      data-index={index}
                      data-testid={`cell-item-${item.id}`}
                      before={<Avatar />}
                      draggable
                      onDragFinish={handleDragFinish}
                    >
                      {item.value}
                    </Cell>
                  ))}
                </List>
              </Group>
              <Spacing size={24} />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const CellDraggableInModalPlayground = () => {
  const [draggingList, updateDraggingList] = React.useState(getInitialDraggableListState);

  const handleDragFinish = ({ from, to }: SwappedItemRange) => {
    updateDraggingList((prev) => {
      const next = [...prev];
      next.splice(from, 1);
      next.splice(to, 0, prev[from]);
      return next;
    });
  };

  const modal = (
    <ModalRoot activeModal="test">
      <ModalPage id="test" modalContentTestId="scroll-element">
        <Group>
          <List data-testid="offset-parent">
            {draggingList.map((item, index) => (
              <Cell
                key={item.id}
                data-index={index}
                data-testid={`cell-item-${item.id}`}
                before={<Avatar />}
                draggable
                onDragFinish={handleDragFinish}
              >
                {item.value}
              </Cell>
            ))}
          </List>
        </Group>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout modal={modal}></SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
