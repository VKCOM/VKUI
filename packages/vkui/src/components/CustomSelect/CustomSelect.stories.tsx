import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Icon24User } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities, getRandomUsers } from '../../testing/mock';
import { getFormFieldIconsPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { FormLayoutGroup } from '../FormLayoutGroup/FormLayoutGroup';
import { Header } from '../Header/Header';
import { CustomSelect, type SelectProps } from './CustomSelect';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<SelectProps> = {
  title: 'Forms/CustomSelect',
  component: CustomSelect,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onOpen: fn(), onClose: fn() },
  argTypes: {
    before: iconsPresets,
  },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    options: cities,
  },
};

function getUsers(usersArray: ReturnType<typeof getRandomUsers>) {
  return usersArray.map((user) => ({
    label: user.name,
    value: `${user.id}`,
    avatar: user.photo_100,
    description: user.screen_name,
  }));
}

export const QAPlayground: Story = {
  render: function Render() {
    const selectTypes = [
      {
        label: 'default',
        value: 'default',
      },
      {
        label: 'plain',
        value: 'plain',
      },
      {
        label: 'accent',
        value: 'accent',
      },
    ];

    const [selectType, setSelectType] = React.useState<undefined | SelectProps['selectType']>(
      undefined,
    );
    const users = [...getUsers(getRandomUsers(10))];
    return (
      <Div style={{ minWidth: '500px' }}>
        <Header Component="h1">Custom Select на десктопе</Header>
        <Header>Базовые примеры использования</Header>

        <FormLayoutGroup mode="horizontal">
          <FormItem
            top="Администратор"
            htmlFor="administrator-select-id"
            style={{ flexGrow: 1, flexShrink: 1 }}
          >
            <CustomSelect
              id="administrator-select-id"
              placeholder="Не выбран"
              options={users}
              defaultValue={users[2].value}
              selectType={selectType}
              allowClearButton
            />
          </FormItem>

          <FormItem
            top="Вид выпадающего списка"
            htmlFor="select-type-select-id"
            style={{ flexBasis: '200px', flexGrow: 0 }}
          >
            <CustomSelect
              id="select-type-select-id"
              value={selectType}
              placeholder="Не задан"
              options={selectTypes}
              defaultValue={selectTypes[0].value}
              onChange={(e) => setSelectType(e.target.value as SelectProps['selectType'])}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} description={`"${option.value}"`} />
              )}
            />
          </FormItem>
        </FormLayoutGroup>

        <FormItem
          top="Администратор"
          bottom="Кастомный дизайн элементов списка"
          htmlFor="administrator-select-id-2"
        >
          <CustomSelect
            id="administrator-select-id-2"
            placeholder="Не выбран"
            options={users}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption
                {...restProps}
                before={<Avatar size={24} src={option.avatar} />}
                description={option.description}
              />
            )}
          />
        </FormItem>

        <FormItem
          top="Администратор"
          htmlFor="administrator-select-id-3"
          bottom="Ползунок скроллбара по умолчанию скрыт"
        >
          <CustomSelect
            id="administrator-select-id-3"
            placeholder="Не выбран"
            options={users}
            selectType={selectType}
            autoHideScrollbar
          />
        </FormItem>

        <Header>Поиск</Header>
        <FormItem
          top="Администратор"
          htmlFor="administrator-select-searchable-id-3"
          bottom="Поиск по списку"
        >
          <CustomSelect
            before={<Icon24User />}
            placeholder="Введите имя пользователя"
            searchable
            id="administrator-select-searchable-id-3"
            options={users}
            allowClearButton
          />
        </FormItem>
      </Div>
    );
  },
};
