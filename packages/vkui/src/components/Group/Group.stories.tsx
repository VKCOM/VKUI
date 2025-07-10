import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon28AddOutline,
  Icon28CheckShieldDeviceOutline,
  Icon28DevicesOutline,
  Icon28KeyOutline,
  Icon28MailOutline,
  Icon28PhoneOutline,
} from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { CellButton } from '../CellButton/CellButton';
import { Playground as BasicCellButton } from '../CellButton/CellButton.stories';
import { Header } from '../Header/Header';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Group, type GroupProps } from './Group';

const story: Meta<GroupProps> = {
  title: 'Layout/Group',
  component: Group,
  parameters: createStoryParameters('Group', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<GroupProps>;

export const Playground: Story = {
  args: {
    header: <Header>Header</Header>,
    description: 'Description',
    children: <CellButton {...BasicCellButton.args} before={<Icon28AddOutline />} />,
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
        <Group.Container>
          <Group.Header>
            <Header>Подкомпонентный подход: Адреса</Header>
          </Group.Header>
          <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
          <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
          <Group.Description>
            Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах
            ВКонтакте. Эти адреса видны только Вам.
          </Group.Description>
        </Group.Container>
        <Group>
          <Header>Контент игнорирует боковые отступы Group</Header>
          <Group.ExpandedContent>
            <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
            <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
          </Group.ExpandedContent>
        </Group>
      </>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
