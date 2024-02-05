import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon28CheckShieldDeviceOutline,
  Icon28DevicesOutline,
  Icon28KeyOutline,
  Icon28MailOutline,
  Icon28PhoneOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CellButton } from '../CellButton/CellButton';
import { Playground as BasicCellButton } from '../CellButton/CellButton.stories';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Group, GroupProps } from './Group';

const story: Meta<GroupProps> = {
  title: 'Blocks/Group',
  component: Group,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<GroupProps>;

export const Playground: Story = {
  args: {
    header: <Header>Header</Header>,
    description: 'Description',
    children: <CellButton {...BasicCellButton.args} />,
  },
};

export const Example: Story = {
  ...Playground,
  decorators: [
    () => (
      <>
        <Group>
          <Group mode="plain">
            <SimpleCell indicator="+7 ••• •• •• 96" before={<Icon28PhoneOutline />}>
              Номер телефона
            </SimpleCell>
            <SimpleCell indicator="g•••@gmail.com" before={<Icon28MailOutline />}>
              Email
            </SimpleCell>
          </Group>
          <Group mode="plain">
            <SimpleCell indicator="Обновлён 3 года назад" before={<Icon28KeyOutline />}>
              Пароль
            </SimpleCell>
            <SimpleCell indicator="Вкл." before={<Icon28CheckShieldDeviceOutline />}>
              Подтверждение входа
            </SimpleCell>
            <SimpleCell indicator="2" before={<Icon28DevicesOutline />}>
              Привязанные устройства
            </SimpleCell>
          </Group>
        </Group>
        <Group
          header={<Header>Адреса</Header>}
          description="Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам."
        >
          <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
          <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
        </Group>
      </>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
