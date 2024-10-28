import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { FormItem, type FormItemProps } from './FormItem';

const story: Meta<FormItemProps> = {
  title: 'Forms/FormItem',
  component: FormItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FormItemProps>;

export const Playground: Story = {
  args: {
    top: 'Top form item',
    bottom: 'Bottom form item',
    children: 'Form Item',
  },
  decorators: [
    (Component) => (
      <div style={{ maxWidth: '300px' }}>
        <Component />
      </div>
    ),
  ],
};

export const WithInputField: Story = {
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: <Input id="password" type="password" placeholder="Введите пароль" />,
  },
};

export const WithInputFieldWithError: Story = {
  ...Playground,
  args: {
    top: 'Пароль',
    htmlFor: 'password',
    children: (
      <Input
        id="password"
        type="password"
        placeholder="Введите пароль"
        aria-describedby="errorId"
      />
    ),
    bottom: 'Пароль должен быть не короче 8 символов.',
    bottomId: 'errorId',
    status: 'error',
  },
};

export const WithTopAside: Story = {
  ...Playground,
  args: {
    top: (
      <FormItem.Top>
        <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
        <FormItem.TopAside id="counter">0/100</FormItem.TopAside>
      </FormItem.Top>
    ),
    children: <Textarea id="about" name="about" />,
  },
};
