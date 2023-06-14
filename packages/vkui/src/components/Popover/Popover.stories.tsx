import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { FormLayout } from '../FormLayout/FormLayout';
import { Input } from '../Input/Input';
import { Text } from '../Typography/Text/Text';
import { Popover, PopoverProps } from './Popover';

const story: Meta<PopoverProps> = {
  title: 'Poppers/Popover',
  component: Popover,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<PopoverProps>;

export const Playground: Story = {
  render: (args) => (
    <Popover
      action="hover"
      placement="right"
      content={
        <Div>
          <Text>Привет</Text>
        </Div>
      }
      {...args}
    >
      <Button style={{ margin: 20 }}>Наведи</Button>
    </Popover>
  ),
};

export const Example: Story = {
  render: function Render() {
    const [shown, setShown] = React.useState(true);

    return (
      <>
        <Popover
          action="hover"
          placement="right"
          content={
            <Div>
              <Text>Привет</Text>
            </Div>
          }
        >
          <Button style={{ margin: 20 }}>Наведи</Button>
        </Popover>

        <Popover
          action="click"
          shown={shown}
          onShownChange={setShown}
          content={
            <FormLayout>
              <FormItem htmlFor="name" top="Имя">
                <Input id="name" />
              </FormItem>
              <FormItem htmlFor="lastname" top="Фамилия">
                <Input id="lastname" />
              </FormItem>
              <FormItem top="Соглашение">
                <Checkbox name="agreement">Согласен</Checkbox>
              </FormItem>
              <FormItem>
                <Button onClick={() => setShown(false)}>Отправить</Button>
              </FormItem>
            </FormLayout>
          }
        >
          <Button style={{ margin: '20px 0 0 0' }}>Кликни</Button>
        </Popover>
      </>
    );
  },
};
