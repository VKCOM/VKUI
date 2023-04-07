import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Input } from '../Input/Input';
import { Form, FormProps } from './Form';

const story: Meta<FormProps> = {
  title: 'Forms/Form',
  component: Form,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

export const Playground: StoryObj<FormProps> = {
  render: (props) => (
    <Form {...props}>
      <FormItem top="Пароль">
        <Input type="password" placeholder="Введите пароль" />
      </FormItem>
      <FormItem>
        <Button type="submit" size="l">
          Сохранить
        </Button>
      </FormItem>
    </Form>
  ),
  args: {
    preventDefault: true,
    onSubmit: () => {
      console.log('Форма сохранена!');
    },
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
