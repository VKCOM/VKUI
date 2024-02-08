import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { FormLayoutGroup } from '../FormLayoutGroup/FormLayoutGroup';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Footnote } from '../Typography/Footnote/Footnote';
import { FormItem, FormItemProps } from './FormItem';

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

export const WithFormLayout: Story = {
  render: function Render() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [patronymic, setPatronymic] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.currentTarget;

      const setStateAction = {
        email: setEmail,
        password: setPassword,
        name: setName,
        lastname: setLastname,
        patronymic: setPatronymic,
        about: setAbout,
      }[name];

      if (setStateAction) {
        setSubmitted(false);
        setStateAction(value);
      }
    };

    const onReset = () => {
      setSubmitted(false);
      setEmail('');
      setPassword('');
      setName('');
      setLastname('');
      setPatronymic('');
      setAbout('');
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        style={{ width: '100%' }}
      >
        <FormItem htmlFor="email" top="E-mail" bottomId="email-type">
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            required
            placeholder="Введите e-mail"
            onChange={onChange}
          />
        </FormItem>
        <FormItem
          top="Пароль"
          htmlFor="password"
          bottom={!password && submitted ? 'Пароль должен быть не короче 8 символов.' : undefined}
          bottomId="errorId"
          status={!password && submitted ? 'error' : 'default'}
        >
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Введите пароль"
            onChange={onChange}
          />
        </FormItem>
        <FormLayoutGroup mode="horizontal">
          <FormItem htmlFor="name" top="Имя">
            <Input
              id="name"
              name="name"
              value={name}
              placeholder="Введите имя"
              onChange={onChange}
            />
          </FormItem>
          <FormItem htmlFor="lastname" top="Фамилия">
            <Input
              id="lastname"
              name="lastname"
              value={lastname}
              placeholder="Введите фамилию"
              onChange={onChange}
            />
          </FormItem>
        </FormLayoutGroup>
        <FormItem htmlFor="patronymic" top="Отчество">
          <Input
            id="patronymic"
            aria-describedby="patronymicDescription"
            name="patronymic"
            value={patronymic}
            placeholder="Введите отчество"
            onChange={onChange}
          />
          <Footnote id="patronymicDescription" role="alert">
            {/\d/.test(patronymic)
              ? 'Разрешены только буквы и тире.'
              : 'Если у вас нет отчества — оставьте поле пустым.'}
          </Footnote>
        </FormItem>
        <FormItem
          // top="Дополнительная информация"
          top={
            <FormItem.Top>
              <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
              <FormItem.TopAside id="counter">{about.length}/100</FormItem.TopAside>
            </FormItem.Top>
          }
          bottom="Расскажите о себе"
          bottomId="aboutDescription"
        >
          <Textarea
            id="about"
            aria-describedby="aboutDescription counter"
            name="about"
            value={about}
            placeholder="Хобби, интересы, увлечения..."
            onChange={onChange}
          />
        </FormItem>
        <FormItem>
          <Button size="l" stretched type="submit">
            Зарегистрироваться
          </Button>
        </FormItem>
        <FormItem>
          <Button size="l" stretched onClick={onReset}>
            Очистить
          </Button>
        </FormItem>
      </form>
    );
  },
};
